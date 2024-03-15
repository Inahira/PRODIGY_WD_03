
    let currentPlayer = 'X';
    let gameOver = false;
    let moveCount = 0;

    function playerMove(index) {
        if (!gameOver) {
            let square = $('.square').eq(index);
            if (square.text() === '') {
                square.text(currentPlayer);
                moveCount++;
                checkWin();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        let squares = $('.square');
        let lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let line of lines) {
            let [a, b, c] = line;
            if (squares.eq(a).text() !== '' && squares.eq(a).text() === squares.eq(b).text() && squares.eq(b).text() === squares.eq(c).text()) {
                gameOver = true;
                highlightWinner(line);
                alert('Player ' + currentPlayer + ' wins!');
                return;
            }
        }
        if (moveCount === 9) {
            gameOver = true;
            $('.square').addClass('tie');
            alert('It\'s a tie!');
        }
    }

    function highlightWinner(line) {
        for (let i of line) {
            $('.square').eq(i).addClass('winner');
        }
    }

    function restart() {
        $('.square').text('');
        $('.square').removeClass('winner');
        $('.square').removeClass('tie');
        currentPlayer = 'X';
        gameOver = false;
        moveCount = 0;
    }