const taskInput = document.getElementById("taskInput");
      const addTaskButton = document.getElementById("addTask");
      const taskList = document.getElementById("taskList");

      function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return alert("Type a task...");

        const taskItem = document.createElement("li");
        const now = new Date();
        const dateString = now.toLocaleString();

        taskItem.innerHTML = `
          <div class="task-content">
            <div>${taskText}</div>
            <div class="task-date">${dateString}</div>
          </div>
          <div class="task-actions">
            <button class="completed" id="btn-done" data-tooltip="Done" ><i class="fa-solid fa-check"></i></button>
            <button class="remove" id="btn-remove"  data-tooltip="Remove"><i class="fas fa-trash"></i></button>
          </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";

        const completeBtn = taskItem.querySelector(".completed");
        const removeBtn = taskItem.querySelector(".remove");

        completeBtn.addEventListener("click", () => {
          const content = taskItem.querySelector(".task-content");
          content.classList.toggle("done");
          
          completeBtn.style.backgroundColor = content.classList.contains("done")
            ? "green"
            : "white";
            completeBtn.style.color = content.classList.contains("done")
            ? "white"
            : "black";

            

        });

        removeBtn.addEventListener("click", () => taskItem.remove());
      }

      addTaskButton.addEventListener("click", addTask);