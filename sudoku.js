function sudoku(grid) {

    var grid2 = [];
    var str = "123456789";
    for (var i = 0; i < grid.length; i++) {
        grid2[i] = [];
        for (var j = 0; j < grid[i].length; j++) {
            grid2[i][j] = grid[j][i]
        }
    }

    if (grid.length === 9 && grid2.length === 9) {
        for (var i = 0; i < grid.length; i++) {
            console.log(grid[i].length, "grid1", grid2[i].length, "grid2")
            // if(grid[i].length === 9 && grid2[i].length===9)
            if (grid[i].sort().join("") === str && grid2[i].sort().join("") === str) {
                return "the grid is valid";
            }
            else {
                return "the grid is not valid ";
            }
        }
    }
    else {
        return "there is plus array it's not sudoku";
    }

}