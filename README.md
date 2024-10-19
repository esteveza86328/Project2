<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <meta charset="utf-8">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="project2.js"></script>
    </head>
    <body>
        <h1>To do list</h1>
        <form id="task">Enter task:
            <input id="taskname" type="text" placeholder="Task name">
            <label>Task priority</label>
            <select id="selectprio">
                <option value="Low">Low priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
            </select>
            <label id="task-status">Task status: <input type="radio" name="taskradio" value="Completed">Completed
            <input type="radio" name="taskradio" value="Pending">Pending</label>
            <button class="submit">Submit</button>
        </form>  
        
        <ul id="tasklist"></ul>
    </body>    
</html>
