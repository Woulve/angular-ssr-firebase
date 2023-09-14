# AngularSsrFirebase

Blueprint for an Angular Project with Standalone components, lazy loading, Server side rendering with client hydration and firebase hosting with firebase functions.

Important is, for github actions to work,

```
env:
      FIREBASE_CLI_EXPERIMENTS: webframeworks
```

Has to be added to the firebase deployment steps in the github workflow files.
See [firebase-hosting-merge.yml](./.github/workflows/firebase-hosting-merge.yml).

Also the correct roles have to be given to the github-actions Principal.
To get deployments from github actions working, the github actions principal,
e.g. "github-action-123456789@project-name-12345.iam.gserviceaccount.com" needs to have the roles:

- API Keys Viewer
- Cloud Functions Developer
- Cloud Functions Service Agent
- Cloud Run Viewer
- Firebase Authentication Admin
- Firebase Hosting Admin

If the roles are not set correctly, the build and deploy action will not work.
