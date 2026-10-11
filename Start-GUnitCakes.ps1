$ErrorActionPreference = "Stop"

$projectRoot = $PSScriptRoot
$nodeBin = "C:\Users\aphil\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$pnpmBin = "C:\Users\aphil\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin"
$pnpm = Join-Path $pnpmBin "pnpm.cmd"
$url = "http://localhost:43217/"

$env:Path = "$nodeBin;$pnpmBin;$env:Path"

function Test-GUnitCakesSite {
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 3
    return $response.StatusCode -eq 200
  }
  catch {
    return $false
  }
}

if (-not (Test-GUnitCakesSite)) {
  Start-Process `
    -FilePath $pnpm `
    -ArgumentList @("exec", "vinext", "dev", "--host", "0.0.0.0", "--port", "43217") `
    -WorkingDirectory $projectRoot `
    -WindowStyle Hidden

  for ($attempt = 0; $attempt -lt 30; $attempt++) {
    Start-Sleep -Seconds 1
    if (Test-GUnitCakesSite) {
      break
    }
  }
}

if (-not (Test-GUnitCakesSite)) {
  Write-Host "The G-Unit Cakes website could not be started." -ForegroundColor Red
  Read-Host "Press Enter to close"
  exit 1
}

Start-Process $url
