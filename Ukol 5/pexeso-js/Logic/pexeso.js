import {field} from "./models/field.js";
import {Coordinate} from "./models/Coordinate.js";
import {  } from "module";

export class Minesweeper {

    /**
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns, bombs = null) {

        this.rows = rows;
        this.columns = columns;

        this.isGameOver = false;

        let maxId = (this.rows * this.columns) / 2;
        let idsArray = [];
        for (let i = 0; i < maxId; i++) {
            idsArray.push(i);
            idsArray.push(i);
        }

        this.array = [];

        for(let i = 0; i < rows; i++) {
            let k = [];
            for(let j = 0; j < columns; j++) {
                let tmp = Math.floor(Math.random()*idsArray.length)
                k.push(field.hidden)
            }
            this.array.push(k);
        }

        this.fields = [];

        for(let l = 0; l < bombs; l++) {
            let x  = Math.floor(Math.random() * this.columns);
            let y = Math.floor(Math.random() * this.rows);

            let coordinate = new Coordinate(x,y);

            this.bombLocation.push(coordinate);
        }
        console.log(this.bombLocation)
    }

    /**
     * TODO: IMPLEMENT THIS
     * Calculate how many bombs should be on the field and return it.
     * The calculation should Depend on the size of the field.
     * @private
     * @return {number} amount of bombs
     */
    _calculateDefaultBombs() {
        return 5;
    }


    /**
     * TODO: IMPLEMENT THIS
     * Returns the current state of the field.
     * Fields can be: hidden, visible, flagged or question marked.
     * @param {number} x
     * @param {number} y
     * @return {field}
     */
    getField(x, y) {
        return this.array[x][y];
    }
    

    /**
     * TODO: IMPLEMENT THIS
     * Returns how many bombs are around the field
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    getAmountOfSurroundingBombs(x, y) {
        let surroundingBombs = 0;

        if(this.isBombOnPosition(y+1, x) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y, x+1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y+1, x+1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y+1, x-1) === true)
            surroundingBombs++;

        if (this.isBombOnPosition(y-1, x+1) === true)
            surroundingBombs++;

            console.log(surroundingBombs);

        return surroundingBombs++;

    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns true there is a bomb on the position
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isBombOnPosition(x, y) {
        for(let i = 0; i < this.bombLocation.length; i++) {
            if(this.bombLocation[i].x === x && this.bombLocation[i].y === y) 
                return true;
        }     
        return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Reveals the field and all empty connected fields around it.
     * Or stops the game if clicked on a position, where a bomb is located.
     * @param {number} x
     * @param {number} y
     */
    reveal(x, y) {
        if(this.pair.cell1 === null && this.pair.cell2 === null) {
            this.pair.cell1 = this.fields[x][y].id;
            this.revealCell(x,y);
        }   else if(this.pair.cell2 === null) {
            this.pair.cell2 = this.fields[x][y].id;
            this.revealCell(x,y);
        }

        this.pair.isPaurEqual();
    }

    makeSpread(x,y) {
        if (this.array[x][y] === field.hidden) {
            this.array[x][y] = field.visible;
            if (this.getAmountOfSurroundingBombs(x,y) === 0) {
                if (x - 1 >= 0 && x - 1 < this.rows && y >= 0 && y < this.columns)
                this.makeSpread(x - 1, y);

                if (x + 1 >= 0 && x + 1 < this.rows && y >= 0 && y < this.columns)
                this.makeSpread(x + 1, y);

                if (x  >= 0 && x < this.rows && y  - 1>= 0 && y < this.columns)
                this.makeSpread(x, y - 1);

                if (x  >= 0 && x < this.rows && y - 1 >= 0 && y < this.columns)
                this.makeSpread(x, y + 1);
            }
        }
    }


    /**
     * TODO: IMPLEMENT THIS
     * Toggles the field state, if it has not been revealed yet.
     * @param {number} x
     * @param {number} y
     */
    toggleFieldState(x, y) {

        if(this.array[y][x] == field.hidden)
            this.array[y][x] = field.flag;

        else if (this.array[y][x] == field.flag)
            this.array[y][x] = field.question_mark;

        else if (this.array[y][x] == field.question_mark)
            this.array[y][x] = field.hidden;
        
        else
            this.array[y][x] = field.visible;
    
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        if(this.isGameOver === true)
            return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user clicked a bomb and therefore lost.
     * @returns {boolean}
     */
    didLoose() {
        if(this.isGameOver === true)
            return true;
    }

    /**
     * Returns the remaining amount bombs, user has to select
     * @return {number}
     */
    getRemainingBombCount() {
        return this.bombs;
    }

}

    class Coordinate {
        constructor(x,y) {
            this.x = x;
            this.y = y;
        }
    }