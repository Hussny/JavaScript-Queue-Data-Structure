# JavaScript-Queue-Data-Structure
JavaScript Queue Data Structure

<br> 



<p> A <b> queue </b> is a simple data structure that allows elements to be inserted from one end, called the rear, and deleted from the other end, called the front.</p>
<h2> Remember:</h2>
<p>1). Rear is also called Tail </p>
<p>2). Front is also called head </p>


<p> This behavior, where the element which was added first is deleted first is called <b> FIFO  (First in First Out)</b> </p>

<p> The image below shows a simple real world example, People (Human Being)  on a queue,  let say customers in a bank queue the customer who entered first will be served  first </p>

![queue](https://github.com/HarunHM/JavaScript-Queue-Data-Structure/blob/master/queue.png)


<p> JavaScript queue is not different from the above example element are added at the rear and removed at the front<p>
  
 <h1> Code </h1>
 
 ![Preview](https://github.com/HarunHM/JavaScript-Queue-Data-Structure/blob/master/Screenshot%20from%202020-06-16%2018-05-37.png)
 
 <br> 
 
<h1> operations on the queue.</h1>
<h3>Adding an element in the Queue:</h3> 

<code>
<p>const myq = new myQueue():<br>
<p>myq.add(1); </p>
<p>myq.add(2); </p>
<p>myq.add(3); </p>
<p>console.log(myq);</p>
</code> 

<h3>Getting the first & the last element in the Queue:</h3> 
<code>
<p>console.log(q.first());</p>

<p>console.log(q.last());</p>
</code>


Remember you can implement queue using array and use array methods such as push to perform some operation in queues

<h3>Renoving an element in the Queue:</h3>
<code>
<p>myq.remove();</p>
<p>console.log(myq);</p>
</code>

<h3> And the last method call size;</h3>
<code>
<p>console.log(myq.size())
 </p>


<h2>Rememeber these are not in built methods.</h2>



