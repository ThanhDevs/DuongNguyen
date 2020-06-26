;$(function(){

// get elements muon lam viec 

var itemList = $('ul.nav-list li.list-itme'),
	contentItem = $('.content-item');


	/*
	1. get elemt 
		$('el')
	2. Gán biến = bằng với giá trị 
	3. thêm sự kiện .on('sự kiện', () => { callback fn })
	4. xác định phần tử nào đang được kích hoạt bằng câu lệnh this 
	5. Tìm kiếm [ find('id, class, tag') eq lọc chỉ số index .eq(số), first(), last(), siblings [tìm những anh em ]]
	6. thêm xóa thuộc tính (attr) trong html addClass, removeClass

	js, jquery, vue, react, angular tương tác với người dùng thông qua Dom, CSS

	Js, jQuery, thư viện khác... quan tâm tới việc logic  của chung ta, tới dom

	DOM [ D => documents, O = Objects, M = Model ]

	BOM [ Trình duyệt, O = Objects, M = Model ] tính tương thích hơn 

	vue, react, angular: MODEL => DỮ LIỆU và không quan tâm DOM DATA 


	*/ 



// console.log(contentItem);

// them active cho thang dau tien 

itemList.last().addClass('is-active');

// them su kien vao no 
itemList.on('click', function() {
	

	// tim index cua phan tu dang duoc click 

	var listItemIndex = $(this).index();

	$(this).addClass('is-active')
		.siblings()
		.removeClass('is-active');

	// 0 1 2

	// console.log(listItemIndex);

	// tim chi so index cua contentItem 

	// contentItem.eq(listItemIndex);

	// console.log(contentItem.eq(listItemIndex));

	// them class vao 

	contentItem.eq(listItemIndex)
		.addClass('is-active')
		.siblings()
		.removeClass('is-active');


	

	// removeClass is-active cho nhung item ben canh


});


// tu duy phan tich 

// tu duy 
  

  // logic 

  // if () {

  // }

  // else if () {

  // }

  // else {

  // }


  // switch () {
  // 	case : '1111'

  // 	case : '222'

  // 	case : '333'

  // }

  // loop

  // for

  // while



  	
});

// đối tượng 
new Vue({
	el: '#wrap',
	data: {
		title: 'Tab content dùng Js!',
		img: 'https://anhlaptrinhvien.net/templates/construction/assets/img/services/our-services-3-370x250.jpg',
	}
});