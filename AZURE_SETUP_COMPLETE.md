# Complete Azure Web App Setup - FINAL FIX

## What I Fixed:

1. ✅ **Updated deployment workflow** - Now correctly deploys the `dist` folder
2. ✅ **Improved web.config** - Better routing and MIME type handling
3. ✅ **Added verification step** - Workflow now lists files to verify deployment
4. ✅ **Fixed package path** - Deployment now uses `./node-app` correctly

## Azure Portal Configuration (REQUIRED):

### Step 1: Configuration → General Settings
1. Go to Azure Portal → Your Web App (`w25-comp4101-17`)
2. Click **Configuration** → **General settings** tab
3. Set these values:
   - **Stack**: `Node.js` (or leave default)
   - **Startup Command**: **LEAVE EMPTY** ⚠️ (This is critical!)
   - **Always On**: `On`
4. Click **Save**

### Step 2: Configuration → Application Settings
1. Still in **Configuration**, go to **Application settings** tab
2. Add/Verify these settings:
   - `WEBSITE_NODE_DEFAULT_VERSION`: `~18` (or leave empty)
   - `SCM_DO_BUILD_DURING_DEPLOYMENT`: `false` ⚠️ (Important!)
   - `WEBSITE_RUN_FROM_PACKAGE`: `1`
3. Click **Save**

### Step 3: Verify Deployment
1. Go to **Deployment Center**
2. Check that the latest deployment shows "Success"
3. If not, check the logs

### Step 4: Check Files (Kudu Console)
1. Go to **Advanced Tools (Kudu)** → Click **Go**
2. Click **Debug console** → **CMD**
3. Navigate to: `site\wwwroot`
4. You should see:
   - `index.html`
   - `web.config`
   - `assets/` folder

## After Configuration:

1. **Wait 2-3 minutes** for settings to apply
2. **Restart** your Web App (Overview → Restart)
3. **Visit** your website: `https://w25-comp4101-17-azd2f5bxarhxa0fn.uaenorth-01.azurewebsites.net/`

## If Still Not Working:

1. Check **Log stream** for errors
2. Check **GitHub Actions** to verify deployment completed
3. Verify files exist in Kudu console
4. Try accessing: `https://w25-comp4101-17-azd2f5bxarhxa0fn.uaenorth-01.azurewebsites.net/index.html` directly

## Next Deployment:

The workflow will automatically deploy on every push to `main` branch. No manual steps needed!

