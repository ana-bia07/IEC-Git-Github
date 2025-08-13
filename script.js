document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sidebar button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Esconde todos
            contents.forEach(c => c.classList.remove("active"));

            // Pega o ID sem o #
            const targetId = btn.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});
