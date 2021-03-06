var accordion = $('.accordion');

accordion.find('dd').hide();
accordion.find('dt').on('click', function(){
	$(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
});

var accordion_2 = $('.accordion_2');

accordion_2.find('dd').hide();
accordion_2.find('dt').on('click', function(){
	$(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');
});






var alphabet = [
	{
  		image: "./images/Solaris.jpg",
		description:'Lathander\'s legendary bow!' 
	},
	{
	  	image: "./images/Twinblade.jpg",
  		description:'Why swing 1D8 when you can have 2D6?'  
	},
	{
  		image: "./images/Sword.jpg",
		description:'Property of the King of Gondor.'
	},
	{
	  	image: "./images/HatOfManyThings.jpg",
  		description:'Also used for sorting children.'  
	},
	{
  		image: "./images/Battleaxe-Silver.jpg",
		description:'The silver battleaxe is the favoured weapon of the Order of Clangeddin Silverbeard. Members of the order find their silvered weapons particularly useful against giants, fiends and lycanthropes.'
	},
	{
	  	image:"./images/Vambraces-Elven.jpg",
  		description:'These vambraces are crafted from the fallen leaves of plaguechanged trees in Thornwood (the rare few trees in the region that survived the spellplague). Though the natural forest eventually regrew after being replanted by elves, descendents of the plaguechanged are still found on occassion. The leaves of such trees become strong and rigid as iron when they fall, but remain light and retain their colour. They are considered precious among elvenkind.'
	},
	{
  		image: "./images/test-icon.jpg",
		description:'G is the 7th letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'H is the 8th letter of the alphabet, etc'  
	},
	{
  		image: "./images/test-icon.jpg",
		description:'I is the 9th letter of the alphabet, etc'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'J is the 10th letter of the alphabet, etc'  
	},
	{
  		image: "./images/Alchemist.jpg",
		description:'Here be alchemy...'
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'L is the 12th letter of the alphabet, etc'  
	},
	{
	  	image: "./images/test-icon.jpg",
  		description:'M is the 13th letter of the alphabet, etc'  
	},
];


$('.thumbnail_equipment').on('click',function(){
	$(this).toggleClass('thumbnail_pressed_equipment');

	$('.thumbnail_pressed_equipment').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_equipment');
	});

	load_equip_card($(this).attr('data-ref'));
});

$('.thumbnail_spells').click(function(){
	$(this).toggleClass('thumbnail_pressed_spells');

	$('.thumbnail_pressed_spells').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_spells');
	});

	load_spell_card($(this).attr('data-ref'));
});

$('.thumbnail_races').click(function(){
	$(this).toggleClass('thumbnail_pressed_races');

	$('.thumbnail_pressed_races').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_races');
	});

	load_race_card($(this).attr('data-ref'));
});

$('.thumbnail_classes').click(function(){
	$(this).toggleClass('thumbnail_pressed_classes');

	$('.thumbnail_pressed_classes').not(this).each(function(){
    	$(this).toggleClass('thumbnail_pressed_classes');
	});

	load_class_card($(this).attr('data-ref'));
});


/*	$("#imgLocation").attr("src", obj.image);*/

function load_equip_card(ref){
	var obj = alphabet[ref];
	$("#img_equipment").attr("src", obj.image);
	//$('.img_equipment').html(obj.image);
	$('.info_equipment').html(obj.description);
};

function load_spell_card(ref){
	var obj = alphabet[ref];
	$("#img_spells").attr("src", obj.image);
	//$('#img_spells').html(obj.image);
	$('.info_spells').html(obj.description);
};

function load_race_card(ref){
	var obj = alphabet[ref];
	$("#img_races").attr("src", obj.image);
	//$('#img_races').html(obj.image);
	$('.info_races').html(obj.description);
};

function load_class_card(ref){
	var obj = alphabet[ref];
	$("#img_classes").attr("src", obj.image);
	//$('#img_classes').html(obj.image);
	$('.info_classes').html(obj.description);
};


	//var img = new Image();
	//img.src = obj.image;
	//document.getElementById('img_equipment').appendChild(img);

	//var myImage = '<img src="' + obj.image'">' + '</img>';
	//$('.img_equipment').html(myImage);
	//$('.img_equipment').html(load_image($(this).attr('data-ref')));

/*<img src="images/test-icon.jpg" width="60px"></img>*/
/*$.getJSON("feed.json", loadImage);

function load_image(ref) {
	var image = alphabet[ref].image;
	$("<img/>").attr("src", image);
};*/



var equipment = '{"Equipment": [' + 
	'{"EquipmentType": "bow", "EquipmentName": "Solaris", "Description": "This is Lathender\'s bow"},' +
	'{"EquipmentType": "sword", "EquipmentName": "Numeril", "Description": "This is Arathorn\'s sword"},' +
	'{"EquipmentType": "axe", "EquipmentName": "Treefell", "Description": "This is Paul Bunyan\'s axe"},' +
	'{"EquipmentType": "hammer", "EquipmentName": "Judgement", "Description": "The sacred hammer of House Ironblood"} ]}';

var arrEquipment = JSON.parse(equipment);

document.getElementById("demo2").innerHTML =
	arrEquipment.Equipment[0].EquipmentName + "<br>" +
	arrEquipment.Equipment[1].EquipmentName + "<br>" +
	arrEquipment.Equipment[2].EquipmentName + "<br>" +
	arrEquipment.Equipment[3].EquipmentName;


/*
var alphabet = [
	{
  		letter: "A",
		description:'A is the first letter of the alphabet, etc'
	},
	{
	  	letter:"B",
  		description:'B is the 2nd letter of the alphabet, etc'  
	}
];

$('.thumbnail').on('click',function(){
	$('.thumbnail').removeClass('selected');
  $(this).addClass('selected');
  load_card($(this).attr('data-ref'));
});

function load_card(ref){
	var obj = alphabet[ref];
  $('#letter_area').html(obj.letter);
  $('#description_area').html(obj.description);
};*/