# Github Tips

---

### Setting up alias for `github` commands

- Let's use VS code to edit the config shell file; open terminal and run the code below:

  - If using ZSH shell `code ~/.zhrc`
  - If using BASH shell `code ~/.bash_profile`
  - To see your default shell: `echo $SHELL `

- Your shell profile file should open in VS Code;
- Copy and paste the code below in your `.zhrc` or `.bash_profile` file:

      alias chrome='open -a "/Applications/Google Chrome.app"'
      alias gs='git status '
      alias ga='git add '
      alias gc='git commit -m '
      alias gp='git push origin '

- Should look like something like this; Saved and Closed the file.

![VS Code Alias](/img/vscodeAlias.png)

- Now you should be able to use `gs` `ga` `gc` and `gp` instead of the full command on your terminal.
