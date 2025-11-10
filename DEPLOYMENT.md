# Azure Deployment Guide

## Prerequisites
- Azure account
- GitHub repository connected to Azure Static Web Apps

## Configuration Files Created

1. **staticwebapp.config.json** - Handles SPA routing for React Router
2. **.github/workflows/azure-static-web-apps.yml** - GitHub Actions workflow for CI/CD

## Setup Steps

### 1. Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new "Static Web App" resource
3. Connect it to your GitHub repository: `oussama60104983/alwafa`
4. Set the branch to `main`
5. Configure build settings:
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: `dist`

### 2. Get Deployment Token

After creating the Static Web App:
1. Go to your Static Web App in Azure Portal
2. Click on "Manage deployment token"
3. Copy the token

### 3. Add GitHub Secret

1. Go to your GitHub repository: https://github.com/oussama60104983/alwafa
2. Go to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: Paste the token from Azure
6. Click "Add secret"

### 4. Trigger Deployment

After adding the secret, the workflow will automatically trigger on the next push, or you can:
1. Go to Actions tab in GitHub
2. Manually trigger the workflow

## Troubleshooting

### Issue: 404 errors on routes
**Solution**: The `staticwebapp.config.json` file handles this. Make sure it's in the root directory.

### Issue: Assets not loading
**Solution**: Check that the build output is in the `dist` folder and the `output_location` in the workflow is set to `dist`.

### Issue: Build fails
**Solution**: 
- Check GitHub Actions logs
- Verify `npm install` and `npm run build` work locally
- Ensure all dependencies are in `package.json`

### Issue: Blank page
**Solution**:
- Check browser console for errors
- Verify `index.html` is in the `dist` folder
- Check that all asset paths are relative (not absolute)

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains your production build
# Upload the contents of dist/ to Azure Static Web App
```

## Verify Deployment

1. Check Azure Portal → Your Static Web App → Overview
2. Find the default URL (usually: `https://<app-name>.azurestaticapps.net`)
3. Visit the URL to verify it's working

