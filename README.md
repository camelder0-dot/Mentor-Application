# FIRST team mentor application

A free, one-page mentor application for FIRST robotics teams. It runs on GitHub Pages, and every application lands as a row in a Google Sheet you own, with an email to whoever you choose. You don't need a server, a paid form tool, or any coding beyond editing one block of settings.

Built for Olympus Robotics, FRC Team 4982 (Homestead High School, Fort Wayne, IN). Any team can copy it.

## What applicants are asked

- Contact info, occupation, and their connection to the team
- Why they want to mentor
- Days, times, parts of the season, and how much they can commit
- Which areas they can help with (CAD, machining, electrical, programming, strategy, drive coaching, media, business, outreach, awards, project management, safety)
- FIRST and teaching experience, plus an optional resume or LinkedIn link
- Whether they'll complete the school's background check
- A required agreement to the team's youth protection standards

## Set it up for your team (about 15 minutes)

### 1. Make the sheet

1. Create a Google Sheet. Rename the first tab to **Applications**.
2. Paste this header row into row 1:

```
Submitted	Name	Email	Phone	City/State	Occupation & employer	Connection to team	How they heard	Why this team	Days	Times	Season	Commitment	Areas	FIRST / robotics experience	Teaching / mentoring experience	Resume or LinkedIn	Background check	Youth protection agreement	Anything else	Status	Notes
```

3. Optional: give the **Status** column a dropdown (New, Contacted, Met, Background check sent, Active mentor, Not a fit).

### 2. Connect the sheet

1. In the sheet: **Extensions → Apps Script**. Replace what's there with `Code.gs` from this repo.
2. Change `TEAM` and `NOTIFY` at the top to your team name and the emails that should hear about new applications.
3. **Deploy → New deployment →** type **Web app**. Execute as **Me**; who has access: **Anyone**.
4. Approve the permissions and copy the **Web app URL**.

### 3. Set up the page

Copy this repo (Fork, or **Use this template**). In `index.html`, edit the `CONFIG` block near the bottom:

```js
const CONFIG = {
  team: "Your Team Name",
  number: "1234",
  program: "FRC",
  school: "Your High School",
  city: "City, ST",
  district: "your district",   // whoever runs the background check
  scriptUrl: "paste the Web app URL here"
};
```

The intro text in the page body is written for a high school FRC team. Read it once and change anything that doesn't match how your team runs.

### 4. Publish

Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save. The page goes live at `https://<username>.github.io/<repo>/`.

### 5. Test

Submit one fake application. Check that the row appears in the sheet and the email arrives, then delete the test row.

## Notes

- **Privacy.** Applications go straight from the page to your Google account. Nothing is stored on GitHub.
- **Spam.** The form has a hidden honeypot field that bots fill and people don't; those submissions are dropped.
- **Changing questions.** Keep each input's `name` in `index.html` in sync with `FIELDS` in `Code.gs` and the sheet's columns, then redeploy the script (**Deploy → Manage deployments → Edit → New version**).
- **Youth protection.** The agreement checkbox assumes your team has written standards. If yours doesn't yet, write them before you start recruiting.

## License

MIT. Use it, change it, share it.
