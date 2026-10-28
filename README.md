# FIRST team mentor application

A free, one-page mentor application for FIRST robotics teams. It runs on GitHub Pages and emails every application to you. You don't need a server, a spreadsheet, a paid form tool, or any coding beyond editing one block of settings.

Built for Olympus Robotics, FRC Team 4982 (Homestead High School, Fort Wayne, IN). Any team can copy it.

## What applicants are asked

- Contact info, occupation, and their connection to the team
- Why they want to mentor
- Days, times, parts of the season, and how much they can commit
- Which areas they can help with (CAD, machining, electrical, programming, strategy, drive coaching, media, business, outreach, awards, project management, safety)
- FIRST and teaching experience, plus an optional resume or LinkedIn link
- Whether they'll complete the school's background check
- A required agreement to the team's youth protection standards

## Set it up for your team (about 5 minutes)

### 1. Copy this repo

Click **Use this template** (or Fork).

### 2. Edit the settings

In `index.html`, edit the `CONFIG` block near the bottom:

```js
const CONFIG = {
  team: "Your Team Name",
  number: "1234",
  program: "FRC",
  school: "Your High School",
  city: "City, ST",
  district: "your district",       // whoever runs the background check
  notifyEmail: "you@example.com"   // where applications are emailed
};
```

The intro text in the page body is written for a high school FRC team. Read it once and change anything that doesn't match how your team runs.

### 3. Publish

Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save. The page goes live at `https://<username>.github.io/<repo>/`.

### 4. Activate the email

Submit one test application. [FormSubmit](https://formsubmit.co) emails `notifyEmail` an **Activate Form** link; click it. From then on, every application arrives in that inbox as an email, with the applicant's address as the reply-to.

## Notes

- **How it sends.** The page posts each application to formsubmit.co, a free form-to-email service, which emails it to you. No account, server, or spreadsheet needed.
- **Hide your address (optional).** After activating, FormSubmit emails you a random string you can use instead of your address in `notifyEmail`, so it isn't visible in the page source.
- **Spam.** The form has a hidden honeypot field that bots fill and people don't; those submissions are never sent.
- **Want a Google Sheet instead?** `Code.gs` is an optional Google Apps Script backend that logs each application to a sheet. It isn't used by the page as shipped.
- **Youth protection.** The agreement checkbox assumes your team has written standards. If yours doesn't yet, write them before you start recruiting.

## License

MIT. Use it, change it, share it.
