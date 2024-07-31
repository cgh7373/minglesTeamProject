
$(function () {


    $('#homeKey').click(function () {
        $('#menuBar').animate({ width: 'toggle' })
    })

    $('#menuBack').click(function () {
        $('#menuBar').animate({ width: 'toggle' })
    })

})

const data = [
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: 'loremsdfjhvcjkxhcvzlkhxcvkzhjxclvkhzxcvhzxclkvhlkxzchvlkzxjchvlkzxchvkljzhxclkvhzkxlchvklxhcvklzxhcvkxjchvlkzx',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {
        userNum: 1,
        userId: 'userId1',
        userNickname: 'kimbaby',
        blackA: '블랙',
        blackB: '까불어서',
    },
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
]

const count_per_page = 13;

const getTotalPage = function () {

    return Math.ceil(data.length / count_per_page);

};

const pagiNum = document.querySelector('.btn-wrapper');

// pagination 생성함수
const setPagi = function () {

    pagiNum.innerHTML = '';

    for (let i = 1; i <= getTotalPage(); i++) {
        const btn = document.createElement('span');
        btn.className = 'number-btn';
        btn.textContent = i;

        pagiNum.appendChild(btn);
    }

}

setPagi();

const table = document.querySelector('#container>#blackList');
let currentPage = 1;
const pageNumberBtn = document.querySelectorAll('.number-btn');

const setPage = function (pageNum) {

    table.innerHTML = '<tr>'+'<th>고유번호</th>'+'<th>아이디</th>'+'<th>닉네임</th>'+'<th>제재내역</th>'+'<th>제재사유</th>'+'</tr>';

    for (
        let i = count_per_page * (pageNum - 1) + 1;
        i <= count_per_page * (pageNum - 1) + 13 && i <= data.length;
        i++
    ) {
        const tr = document.createElement('tr');

        const userNum = document.createElement('td');

        const userId = document.createElement('td');

        const userNickname = document.createElement('td');

        const blackA = document.createElement('td');

        const blackB = document.createElement('td');

        userNum.textContent = data[i - 1].userNum;
        userId.textContent = data[i - 1].userId;
        userNickname.textContent = data[i - 1].userNickname;
        blackA.textContent = data[i - 1].blackA;
        blackB.textContent = data[i - 1].blackB;

        tr.append(userNum, userId, userNickname, blackA, blackB);
        table.append(tr);
    }
    pageNumberBtn[0].classList.add('selected');
    
}

setPage(1);

const moveSelectedPageHighlight = function () {

    pageNumberBtn.forEach(function (numberButton) {
        if (numberButton.classList.contains('selected')) {
            numberButton.classList.remove('selected');
        }
    });

    pageNumberBtn[currentPage - 1].classList.add('selected');

};

pageNumberBtn.forEach(function (numberBtn) {

    numberBtn.addEventListener('click', function (e) {
        setPage(e.target.innerHTML);
        currentPage = +e.target.innerHTML;
        moveSelectedPageHighlight();
    });

});

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', function () {
    
    if (currentPage > 1) {
        currentPage -= 1;
        setPage(currentPage);
        moveSelectedPageHighlight();
    }
    
});

nextButton.addEventListener('click', function () {

    if (currentPage < getTotalPage()) {
        currentPage += 1;
        setPage(currentPage);
        moveSelectedPageHighlight();
    }
    
});












