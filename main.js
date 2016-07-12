$(document).ready( function() {
      
      ($(".items").html(localStorage.getItem('SavedList'))) // Вытаскиваем сохраненные данные из хранилища


    $(document).on("click", ".eye", function() { //Обработка глаза (закрываем, если есть отмеченные элементы и прячем, открываем, если есть спрятанные элементы и показываем их.)
        if (($(".ToDo").css("display")) == "block") {
            $(".eye").css({"background":"#eee 50% url(ClosedEye.png) no-repeat", "background-size":"40%"});
            $(".ToDo").css({"display":"none"});

        } else if (($(".ToDo").css("display")) == "none") {
            $(".eye").css({"background":"#eee 50% url(OpenEye.png) no-repeat", "background-size":"50%"});
            $(".ToDo").css({"display":"block"});
        }
        
    });

    $(document).on("click", ".broom", function() { // Очищаем весь список, в том числе и из хранилища
        $(".items").html('');
        localStorage.removeItem('SavedList');
    });

    $(document).on("click", ".done", function() { // Обработка кнопки, отмечающей выполненное дело
        $(this).parent().parent().css({"background-Color":"green", "text-decoration":"line-through"});
        $(this).parent().parent().addClass("ToDo");
    });

    $(document).on("click", ".delStr", function() { //Удаляем блок, привязанный к кнопке удаления
        $(this).parent().parent().remove();
    });


    $(document).on("click", ".add", function(){
        if (!($('.item').val() == '')) {  // Не даем создать новый элемент,если строка пуста
            $('.items').append('<div><p>' + ($('.item').val()) + '<input type="button" class="delStr"><input type="button" class="done"></p></div>'); // Добавляем новую строку в список
            $(".item").val('');  //Очищаем строку ввода для следующей записи
        };        
    });
    $(document).on("click", ".save", function() { // Сохраняем список в хранилище
        localStorage.setItem('SavedList', $(".items").html());    
    });
});