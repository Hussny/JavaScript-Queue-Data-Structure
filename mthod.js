/*add element  method */
function queueMethods (){
        /*add element  method */
        Queue.prototype.add = function (record) {
            this.data.unshift(record);
        }
        /*Remove element  method */
        Queue.prototype.remove = function () {
            this.data.pop();
        }
        /*Method to Return the first  element*/
        Queue.prototype.first = function () {
            return this.data[0];
        }
        /*Method to Returns the first  element*/
        Queue.prototype.last = function () {
            return this.data[this.data.length - 1];
        }
        /*Method to Returns the size of  the Queue*/
        Queue.prototype.size = function () {
            return this.data.length;
        }
}

