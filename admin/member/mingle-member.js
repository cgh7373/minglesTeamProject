
$(function() {


    $('#homeKey').click(function() {
        $('#menuBar').animate({width:'toggle'})
    })

    $('#menuBack').click(function() {
        $('#menuBar').animate({width:'toggle'})
    })
})
//search 버튼
$(function(){
    const searchEl = document.querySelector('.search');
    const searchInputEl = searchEl.querySelector('input');
    
    searchEl.addEventListener('click',function(){
        searchInputEl.focus()
    });
    
    searchInputEl.addEventListener('focus',function(){
        searchEl.classList.add('focused');
        searchInputEl.setAttribute('placeholder','전체회원검색');
    });
    
    searchInputEl.addEventListener('blur',function(){
        searchEl.classList.remove('focused');
        searchInputEl.setAttribute('placeholder','');
    });
});

//탭js
$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
});
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('choice')
        
    checkboxes.forEach((checkbox)=> 
    {
        checkbox.checked = selectAll.checked;
    })
}
function selectAll2(selectAll)  {
    const checkboxes = document.getElementsByName('choice2')
        
    checkboxes.forEach((checkbox)=> 
    {
        checkbox.checked = selectAll.checked;
    })
}
//모달 js
const modalOpenButton = document.getElementsByClassName('modalOpenButton')
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');


    for(let i=0; i<modalOpenButton.length; i++){
        modalOpenButton[i].addEventListener('click', () => 
        {
           modal.classList.remove('hidden');
        });
        modalCloseButton.addEventListener('click', () => 
        {
            modal.classList.add('hidden');
        });
    }
//페이지네이션 js
const COUNT_PER_PAGE = 10; // 페이지 당 보여줄 게시물 수
const numberButtonWrapper = document.querySelector('.number-button-wrapper'); // 페이지네이션 버튼 wrapper
const ul = document.getElementById('tab01-1') // 게시물을 담을 unordered list
const prevButton = document.querySelector('.prev-button'); // 이전 페이지 버튼
const nextButton = document.querySelector('.next-button'); // 이후 페이지 버튼
let pageNumberButtons; // 페이지 버튼들
let currentPage = 1; // 초기 페이지 번호
const table = document.querySelector('#userlist');
/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
const getTotalPageCount = () => {
  return Math.ceil(data.length / COUNT_PER_PAGE);
};

/**
 * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
 */
const setPageButtons = () => {
  numberButtonWrapper.innerHTML = '';

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`;
  }

  numberButtonWrapper.firstChild.classList.add('selected');
  pageNumberButtons = document.querySelectorAll('.number-button');
};

/**
 * 페이지에 해당하는 게시물 ul에 넣어주기
 * @param {number} pageNumber - 이동할 페이지 번호
 */
const setPageOf = (pageNumber) => {
  table.innerHTML = '<tr>'+'<th> 유저 번호</th>'+'<th>아이디</th>'+'<th>닉네임</th>'+'<th>보유거북알</th>'+'<th>가입일</th>'+'</tr>';
  ul.innerHTML = '';

  for (
    let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;
    i <= COUNT_PER_PAGE * (pageNumber - 1) + 10 && i <= data.length;
    i++
  ) {
    const li = document.createElement('li');

    // 컨테이너
    const postContainer = document.createElement('div');
    postContainer.className = 'post-container';

    //유저 번호
    const postNumber = document.createElement('p');
    postNumber.className = 'post-number';

    //유저 아이디
    const postTitle = document.createElement('p');
    postTitle.className = 'post-title';

    //유저 닉네임
    const username = document.createElement('p');
    username.className = 'username';

    //보유 거북알 
    const gamemoney = document.createElement('p');
    gamemoney.className = 'game-money';

    //가입일
    const enrolldate = document.createElement('p');
    enrolldate.className = 'enrolldate';    

    postNumber.textContent = data[i - 1].postNumber;
    postTitle.textContent = data[i - 1].title;
    username.textContent = data[i - 1].username;
    gamemoney.textContent = data[i - 1].gamemoney;
    enrolldate.textContent = data[i - 1].enrolldate;

    postContainer.append(postNumber, postTitle,username,gamemoney, enrolldate);
    li.append(postContainer);
    ul.append(li);
  }
};
/**
 * 페이지 이동에 따른 css 클래스 적용
 */
const moveSelectedPageHighlight = () => {
  const pageNumberButtons = document.querySelectorAll('.number-button'); // 페이지 버튼들

  pageNumberButtons.forEach((numberButton) => {
    if (numberButton.classList.contains('selected')) {
      numberButton.classList.remove('selected');
    }
  });

  pageNumberButtons[currentPage - 1].classList.add('selected');
};

setPageButtons();
setPageOf(currentPage);

/**
 * 페이지 번호 버튼 클릭 리스너
 */
pageNumberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    currentPage = +e.target.innerHTML;
    console.log(currentPage);
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  });
});

/**
 * 이전 버튼 클릭 리스너
 */
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});

/**
 * 이후 버튼 클릭 리스너
 */
nextButton.addEventListener('click', () => {
  if (currentPage < getTotalPageCount()) {
    currentPage += 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});


//data2-------------------------------------------------------------------------------------------------------
const COUNT_PER_PAGE2 = 10; // 페이지 당 보여줄 게시물 수
const numberButtonWrapper2 = document.querySelector('.number-button-wrapper2'); // 페이지네이션 버튼 wrapper
const ul2 = document.getElementById('tab02-2') // 게시물을 담을 unordered list
const prevButton2 = document.querySelector('.prev-button2'); // 이전 페이지 버튼
const nextButton2 = document.querySelector('.next-button2'); // 이후 페이지 버튼
let pageNumberButtons2; // 페이지 버튼들
let currentPage2 = 1; // 초기 페이지 번호
const table2 = document.querySelector('#userlist2');
/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
const getTotalPageCount2 = () => {
  return Math.ceil(data.length / COUNT_PER_PAGE);
};

/**
 * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
 */
const setPageButtons2 = () => {
  numberButtonWrapper2.innerHTML = '';

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper2.innerHTML += `<span class="number-button2"> ${i} </span>`;
  }

  numberButtonWrapper2.firstChild.classList.add('selected2');
  pageNumberButtons2 = document.querySelectorAll('.number-button2');
};

/**
 * 페이지에 해당하는 게시물 ul에 넣어주기
 * @param {number} pageNumber2 - 이동할 페이지 번호
 */
const setPageOf2 = (pageNumber2) => {
  table2.innerHTML = '<tr>'+'<th> 유저 번호</th>'+'<th>아이디</th>'+'<th>닉네임</th>'+'<th>보유거북알</th>'+'<th>가입일</th>'+'<th>블랙사유</th>'+'</tr>';
  ul2.innerHTML = '';


  for (
    let i = COUNT_PER_PAGE2 * (pageNumber2 - 1) + 1;
    i <= COUNT_PER_PAGE2 * (pageNumber2 - 1) + 10 && i <= data2.length;
    i++
  ) {
    const li = document.createElement('li');

    // 컨테이너
    const postContainer = document.createElement('div');
    postContainer.className = 'post-container2';

    // 유저 번호
    const postNumber = document.createElement('p');
    postNumber.className = 'post-number2';

    // 유저 아이디
    const postTitle = document.createElement('p');
    postTitle.className = 'post-title2';

    //유저 닉네임
    const username = document.createElement('p');
    username.className = 'username2';

    //보유 거북알 
    const gamemoney = document.createElement('p');
    gamemoney.className = 'game-money2';

    //가입일
    const enrolldate = document.createElement('p');
    enrolldate.className = 'enrolldate2'; 
    
    //가입일
    const blackreason = document.createElement('p');
    blackreason.className = 'blackreason';  

    postNumber.textContent = data2[i - 1].postNumber;
    postTitle.textContent = data2[i - 1].title;
    username.textContent = data2[i - 1].username;
    gamemoney.textContent = data2[i - 1].gamemoney;
    enrolldate.textContent = data2[i - 1].enrolldate;
    blackreason.textContent = data2[i - 1].blackreason;

    postContainer.append(postNumber,postTitle,username,gamemoney,enrolldate,blackreason);
    li.append(postContainer);
    ul2.append(li);
  }
};
/**
 * 페이지 이동에 따른 css 클래스 적용
 */
const moveSelectedPageHighlight2 = () => {
  const pageNumberButtons2 = document.querySelectorAll('.number-button2'); // 페이지 버튼들

  pageNumberButtons2.forEach((numberButton) => {
    if (numberButton.classList.contains('selected2')) {
      numberButton.classList.remove('selected2');
    }
  });

  pageNumberButtons2[currentPage2 - 1].classList.add('selected2');
};

setPageButtons2();
setPageOf2(currentPage2);

/**
 * 페이지 번호 버튼 클릭 리스너
 */
pageNumberButtons2.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    currentPage2 = +e.target.innerHTML;
    console.log(currentPage2);
    setPageOf2(currentPage2);
    moveSelectedPageHighlight2();
  });
});

/**
 * 이전 버튼 클릭 리스너
 */
prevButton2.addEventListener('click', () => {
  if (currentPage2 > 1) {
    currentPage2 -= 1;
    setPageOf2(currentPage2);
    moveSelectedPageHighlight2();
  }
});

/**
 * 이후 버튼 클릭 리스너
 */
nextButton2.addEventListener('click', () => {
  if (currentPage2 < getTotalPageCount2()) {
    currentPage2 += 1;
    setPageOf2(currentPage2);
    moveSelectedPageHighlight2();
  }
});

 // 메뉴바 외의 부분 눌렀을때 메뉴바 사라지기
 $(document).click(function (event) {
  if (!$(event.target).closest('#menuBar, #homeKey').length) {
      if ($('#menuBar').is(":visible")) {
          $('#menuBar').animate({width: 'toggle'});
      }
  }
});