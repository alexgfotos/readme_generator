function(questions) {
    var ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    var promise = ui.run(questions);

    // Monkey patch the UI on the promise object so
    // that it remains publicly accessible.
    promise.ui = ui;

    return promise;
  }