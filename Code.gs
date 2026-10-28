// Mentor application backend: receives the website form and logs it to the "Applications" tab.
// Paste this into your applications sheet: Extensions → Apps Script.
// The sheet needs a tab named "Applications" (see README for the header row).

const TEAM = 'Olympus Robotics';
const NOTIFY = ['camelder0@gmail.com']; // everyone who should get an email per application
const SHEET_NAME = 'Applications';
const FIELDS = ['name', 'email', 'phone', 'city', 'occupation', 'connection', 'heard', 'why',
  'days', 'times', 'season', 'commitment', 'areas', 'first_exp', 'teach_exp', 'resume',
  'background', 'ypp', 'other'];

function doPost(e) {
  const p = (e && e.parameters) || {};
  if ((p.website || [''])[0]) return reply_('ok'); // spam trap: bots fill the hidden field

  const value = (f) => clean_((p[f] || []).join(', '));
  const row = [new Date()].concat(FIELDS.map(value)).concat(['New', '']);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    SpreadsheetApp.getActive().getSheetByName(SHEET_NAME).appendRow(row);
  } finally {
    lock.releaseLock();
  }

  try {
    const body = FIELDS.map((f) => f + ': ' + value(f)).join('\n') +
      '\n\nAll applications: ' + SpreadsheetApp.getActive().getUrl();
    MailApp.sendEmail({ to: NOTIFY.join(','), subject: 'New ' + TEAM + ' mentor application: ' + value('name'), body: body });
  } catch (err) {
    console.error(err); // the row is saved even if the email fails
  }
  return reply_('ok');
}

// Stops a submitted answer from being read as a spreadsheet formula.
function clean_(s) {
  s = String(s).slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(s) {
  return ContentService.createTextOutput(JSON.stringify({ result: s })).setMimeType(ContentService.MimeType.JSON);
}
