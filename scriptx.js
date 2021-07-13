

$(document).ready(function () {
    globalThis.count = 1;
   
    
    
    $('#flex-direction button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        
        
        $("#flexbox-parent").css("flex-direction",btnText);
        
    });

    $('#justify-content button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        
        
        $("#flexbox-parent").css("justify-content",btnText);
        
    });

    $('#flex-wrap button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        
        
        $("#flexbox-parent").css("flex-wrap",btnText);
        
    });

    $('#align-items button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        
        
        $("#flexbox-parent").css("align-items",btnText);
        
    });

    $('#align-content button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        
        
        $("#flexbox-parent").css("align-content",btnText);
        
    });

    

    $('.me-2 button[value="default"]').click();
});

function changeWidth(x){
    $(".flex-child").css("width",x);
    
}
$("#addChild").click(function(){
    
    $("#flexbox-parent").append('<div class="flex-child"><span class="badge rounded-pill bg-info text-dark">'+(++count)+'</span><button type="button" class="btn-close " onclick="destroy()"    aria-label="Close"></button><input type="number" class="inputValue" placeholder="flex-grow" oninput="flexgrow(this)"><input type="number" class="inputValue" placeholder="flex-shrink" oninput="flexshrink(this)"><select name="align-self" id="align-self" class="inputValue" oninput="alignself(this)"><option value="auto" selected>none</option><option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center">center</option><option value="baseline">baseline</option><option value="stretch">stretch</option> </select></div>');
});
function destroy(){
    $(".btn-close").on("click",function(){
        $(this).closest('.flex-child').remove();
    });
    
}


function flexgrow(input){
    input.closest('.flex-child').style.flexGrow = input.value;
    
}

function flexshrink(input){
    input.closest('.flex-child').style.flexShrink = input.value;
    
}

function flexbasis(input){
    input.closest('.flex-child').style.flexBasis = input.value;
    
}

function alignself(input){
    input.closest('.flex-child').style.alignSelf = input.value;
    
}


