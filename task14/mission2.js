function Hangman(word) {
    this.startAgain = function (word) {
        this.word = word;
        this.MAX_MISTAKES = 6;
        this.currentMistakes = 0;

        this.guessedCharsUsed = [];
        this.gameState = {
            finished: false,
            message: ``,
            finishGame: function (message) {
                this.finished = true;
                this.message = message;
            }
        };
        return this;
    }

    this.getGuessedString = function () {
        return this.word.split('').map(val => {
            return this.guessedCharsUsed.includes(val) ? val : '_';
        }).join('');
    };

    this.guess = function (char) {
        this.guessedCharsUsed.push(char);
        if (!this.word.toLowerCase().includes(char.toLowerCase())) {
            //Mistake
            this.currentMistakes++;
            if (this.getErrorsLeft() > 0) {
                console.info(`wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(',')}`);
            } else {
                this.gameState.finishGame(`${this.getGuessedString()}, error attemps ${this.getWrongSymbols()} correct word is ${this.word} | You lose!`);
                this.getStatus();
            }
        } else {
            //Correct
            if (!this.getGuessedString().includes('_')) {
                this.gameState.finishGame(`${this.getGuessedString()} | You won!`);
                this.getStatus();
            } else {
                console.info(this.getGuessedString());
            }
        }
        return this;
    }

    this.getErrorsLeft = function () {
        return this.MAX_MISTAKES - this.currentMistakes;
    };

    this.getWrongSymbols = function () {
        return this.guessedCharsUsed.filter(value => !this.word.includes(value))
    };

    this.getStatus = function () {
        if (!this.gameState.finished) {
            console.info(`${this.getGuessedString()} | errors left: ${this.getErrorsLeft()}`);
        } else {
            console.info(this.gameState.message);
        }
    };

    this.startAgain(word);
}

var hangman1 = new Hangman('webpurple');
hangman1.guess('w');
hangman1.guess('e');
hangman1.guess('a');

hangman1.guess('p');
hangman1.guess('k');

hangman1.getGuessedString();
hangman1.getErrorsLeft();
hangman1.getWrongSymbols();
hangman1.getStatus();

hangman1.guess('b')
    .guess('l')
    .guess('u')
    .guess('r'); // win

hangman1.startAgain('webpurple')
    .guess('w')
    .getStatus();

hangman1.guess('s')
    .guess('m')
    .guess('v')
    .guess('t')
    .guess('o')
    .guess('a');