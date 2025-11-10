# Azure Web App Configuration Fix

## The Problem
Azure Web App might be trying to run your React app as a Node.js application instead of serving static files.

## Solution: Configure Azure Portal Settings

### Step 1: Configure General Settings
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Web App: `w25-comp4101-17`
3. Go to **Configuration** → **General settings**
4. Set the following:
   - **Stack**: Choose "Static Site" or "Node.js" (if Static Site not available)
   - **Startup Command**: Leave **EMPTY** (this is important!)
   - **Always On**: Enable this
5. Click **Save**

### Step 2: Verify Deployment
1. Go to **Deployment Center** in your Web App
2. Check that files are being deployed
3. Verify the deployment source is GitHub

### Step 3: Check Logs
1. Go to **Log stream** in your Web App
2. Check for any errors
3. Go to **Advanced Tools (Kudu)** → **Debug console** → **CMD**
4. Navigate to `site/wwwroot` and verify these files exist:
   - `index.html`
   - `web.config`
   - `assets/` folder with CSS and JS files

### Step 4: Manual File Check
If files are missing, the deployment might not be working correctly. Check:
- GitHub Actions logs to see if build completed
- Verify `dist` folder contents are being deployed

## Alternative: Use Azure Static Web Apps
If Azure Web App continues to have issues, consider switching to **Azure Static Web Apps** which is designed for static React apps:
1. Create new Azure Static Web App resource
2. Connect to your GitHub repo
3. Set build settings:
   - App location: `/`
   - Output location: `dist`

