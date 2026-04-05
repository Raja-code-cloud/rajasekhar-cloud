# Deploy this folder to Netlify production.
#
# Token: set NETLIFY_AUTH_TOKEN, or put the token alone in .netlify-token (gitignored).
# Site:  set NETLIFY_SITE_ID, or it defaults to your linked site below.
#
# DNS at GoDaddy: Netlify → Domain management → DNS configuration.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$defaultSiteId = "ece68da9-f5fe-43a5-8522-3836d268499a"

if (-not $env:NETLIFY_AUTH_TOKEN) {
    $tokenPath = Join-Path $PSScriptRoot ".netlify-token"
    if (Test-Path $tokenPath) {
        $env:NETLIFY_AUTH_TOKEN = (Get-Content $tokenPath -Raw).Trim()
    }
}

if (-not $env:NETLIFY_AUTH_TOKEN) {
    Write-Host "Missing token: set NETLIFY_AUTH_TOKEN or create .netlify-token (see .gitignore)." -ForegroundColor Yellow
    exit 1
}

if (-not $env:NETLIFY_SITE_ID) {
    $env:NETLIFY_SITE_ID = $defaultSiteId
}

npx --yes netlify-cli deploy --prod --dir . --site $env:NETLIFY_SITE_ID

exit $LASTEXITCODE
