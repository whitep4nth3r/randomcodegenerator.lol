import {
  getRandomInt
} from "../RandomCodeGenerator";
import {
  nouns
} from "./words";

export default class PowerShell {
  static getRandomFunctionName() {
    const verbs = [
      'Add',
      'Clear',
      'Close',
      'Copy',
      'Enter',
      'Exit',
      'Find',
      'Format',
      'Get',
      'Hide',
      'Join',
      'Lock',
      'Move',
      'New',
      'Open',
      'Optimize',
      'Push',
      'Pop',
      'Redo',
      'Remove',
      'Rename',
      'Reset',
      'Resize',
      'Search',
      'Select',
      'Set',
      'Show',
      'Skip',
      'Split',
      'Step',
      'Switch',
      'Undo',
      'Unlock',
      'Watch',
      'Connect',
      'Disconnect',
      'Read',
      'Receive',
      'Send',
      'Write',
      'Backup',
      'Checkpoint',
      'Compare',
      'Compress',
      'Convert',
      'ConvertFrom',
      'ConvertTo',
      'Dismount',
      'Edit',
      'Expand',
      'Export',
      'Group',
      'Import',
      'Initialize',
      'Limit',
      'Merge',
      'Mount',
      'Out',
      'Publish',
      'Restore',
      'Save',
      'Sync',
      'Unpublish',
      'Update',
      'Debug',
      'Measure',
      'Ping',
      'Repair',
      'Resolve',
      'Test',
      'Trace',
      'Approve',
      'Assert',
      'Build',
      'Complete',
      'Confirm',
      'Deny',
      'Deploy',
      'Disable',
      'Enable',
      'Install',
      'Invoke',
      'Register',
      'Request',
      'Restart',
      'Resume',
      'Start',
      'Stop',
      'Submit',
      'Suspend',
      'Uninstall',
      'Unregister',
      'Wait',
      'Use',
      'Block',
      'Grant',
      'Protect',
      'Revoke',
      'Unblock',
      'Unprotect'
    ];

    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    return `${randomVerb.charAt(0).toUpperCase() + randomVerb.slice(1)}-${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)}`;
  }

  static getSmallNumber() {
    return `${Math.floor(Math.random() * 11)}`;
  }

  static getLargeNumber() {
    return `${Math.floor(Math.random() * 100) + 11}`;
  }

  static getRandomWriteHost() {
    const options = [
      '"Goodbye, world!"',
      '"test"',
      '"hello"',
      `"here ${getRandomInt(0, 100)}"`,
      '"should be here"',
      '"some error"',
      "[object Object]",
      '"undefined"',
      '"=== DEBUG ==="',
      '"to do"',
      '"asdf"',
      "NaN",
      '"FIRE"',
      '"schnitzel"',
      '"TODO: refactor this"',
    ];

    return options[Math.floor(Math.random() * options.length)];
  }

  static getRandomDriveLetter() {
    const driveLetter = ['c', 'd', 'e', 'r', 'n'];
    return `${driveLetter[Math.floor(Math.random() * driveLetter.length)]}:`;
  }

  static getFunctionName() {
    const functionName = ['Write-Host', 'Out-File', 'Set-Acl'];
    return `${functionName[Math.floor(Math.random() * functionName.length)]}:`;
  }

  static getRandomFillerLine() {
    const options = [
      `Write-Host ${PowerShell.getRandomWriteHost()}`,
      `Wrire-Output ${PowerShell.getRandomWriteHost()}`,
      `Wrire-Error ${PowerShell.getRandomWriteHost()}`,
      `Out-File ${PowerShell.getRandomDriveLetter()}\\overhere\\file.txt`,
      `Get-Help ${PowerShell.getFunctionName()}`,
      `1 .. 9 | % { $_ }`,
      `$a = ${PowerShell.getSmallNumber()} .. ${PowerShell.getLargeNumber()}`,
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}
