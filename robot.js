
class Game {
    constructor(mapSize, initPosition, icon) {
        this.state = {
            robotPosition: initPosition,
            mapSize: mapSize,
            icon: icon
        };
    }

    availablePosition(newPosition, mapSize) {
        if (newPosition >= 0 && newPosition < mapSize) {
            return true;
        } else {
            return false;
        }
    }
    
    move(newPosition) {
        if (this.availablePosition(newPosition, this.state.mapSize)) {
            this.state.robotPosition = initPosition;
            this.render();
            return true;
        } else {
            return false;
        }
    }
                  // 1. var that = this;
    render() {   // 2. 直接改成=> es6 arrow function 箭头函数可以修复this指针的问题
        var mapCells = document.querySelectorAll('.map-cell');
        mapCells.forEach(function(aCell, index) {
            if (index === this.state.robotPosition) {
                aCell.innerHTML = this.state.icon;
            } else {
                aCell.innerHTML = '';
            }
        })
    }
    
    onCommandRight() {
        this.move(this.state.robotPosition + 1);
    }
    
}

var game = new Game(5, 2, 'R');
game.render();  
