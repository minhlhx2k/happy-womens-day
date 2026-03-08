// Lấy tên từ URL (ví dụ: ?name=Lan)
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if (name) {
    document.getElementById('user-name').innerText = name;
}

//Chia sẻ trực tiếp qua mạng xã hội (Web Share API)
const btnShare = document.getElementById('btn-share');

btnShare.addEventListener('click', async () => {
    // Lấy tên người nhận hiện tại từ URL hoặc tên mặc định
    const currentName = document.getElementById('user-name').innerText;
    const shareData = {
        title: 'Chúc mừng 8/3',
        text: `Gửi lời chúc 8/3 cực yêu đến ${currentName}! Xem ngay tấm thiệp đặc biệt này nhé.`,
        url: window.location.href // Lấy link hiện tại bao gồm cả ?name=...
    };

    try {
        if (navigator.share) {
            // Dành cho trình duyệt điện thoại hoặc Safari
            await navigator.share(shareData);
        } else {
            // Fallback nếu trình duyệt không hỗ trợ (như Chrome máy tính cũ)
            const copyText = `${shareData.text} tại: ${shareData.url}`;
            navigator.clipboard.writeText(copyText);
            alert('Đã copy link thiệp! Bạn hãy gửi cho mọi người nhé. ❤️');
        }
    } catch (err) {
        console.log('Lỗi chia sẻ:', err);
    }
});

// 1. Danh sách lời chúc
const wishes = [
    "Chúc bạn một ngày 8/3 rạng rỡ như những đóa hoa hướng dương! 🌻",
    "Mong bạn luôn hạnh phúc, tự tin và yêu chính bản thân mình thật nhiều. ❤️",
    "Chúc bạn luôn là phiên bản tuyệt vời nhất của chính mình. Happy Women's Day! ✨",
    "Gửi đến bạn những cái ôm ấm áp và lời chúc tốt đẹp nhất ngày 8/3. 🤗",
    "Hãy luôn mỉm cười nhé, vì nụ cười của bạn là điều đẹp nhất thế gian! 😊",
    "Chúc phái đẹp ngày 8/3 nhận được thật nhiều quà và tình yêu thương! 🎁",

    // --- Lời chúc ngọt ngào & lãng mạn ---
    "Chúc thiên thần của anh có một ngày 8/3 thật hạnh phúc, rạng rỡ và tràn đầy yêu thương! ❤️",
    "Với thế giới bạn chỉ là một người, nhưng với một người bạn là cả thế giới. Chúc mừng ngày 8/3! ✨",
    "Em không cần phải là một nàng công chúa, vì em đã là nữ hoàng trong lòng anh rồi. Happy Women's Day! 👑",
    "Chúc bạn luôn xinh đẹp như những đóa hoa rực rỡ nhất và ngọt ngào như những viên kẹo. 🍬",
    "Ngày của phái đẹp, chúc bạn luôn được yêu thương, nâng niu và trân trọng mỗi ngày! 🌹",

    // --- Lời chúc ý nghĩa & truyền cảm hứng ---
    "Chúc bạn luôn mạnh mẽ như kim cương và dịu dàng như những nhành hoa xuân. 💎",
    "Bạn là duy nhất, là đặc biệt và là một món quà tuyệt vời của thế giới này. Chúc mừng 8/3! 🌟",
    "Đừng bao giờ quên rằng bạn có sức mạnh để thay đổi thế giới. Chúc mừng ngày Quốc tế Phụ nữ! 💪",
    "Mong bạn luôn tự tin, kiêu hãnh và đi trên con đường hạnh phúc mà bạn đã chọn. ✨",
    "Chúc phái đẹp luôn là những đóa hoa rạng rỡ nhất, tự tỏa hương thơm theo cách của riêng mình! 🌸",

    // --- Lời chúc dành cho Mẹ & Người thân ---
    // "Chúc Mẹ yêu của con một ngày 8/3 thật nhiều sức khỏe, luôn nở nụ cười trên môi. Con yêu Mẹ nhiều! ❤️",
    // "Gửi đến người phụ nữ tuyệt vời nhất đời con lời chúc hạnh phúc và bình an nhất! 🌷",
    // "Chúc bà, mẹ và chị em trong gia đình ta một ngày 8/3 ngập tràn niềm vui và quà tặng! 🎁",

    // --- Lời chúc hài hước & vui vẻ ---
    "Chúc chị em 8/3: Tay ôm nhiều hoa, giỏ đầy quà cáp, được đi ăn chơi, quên hết việc nhà! 😆",
    "Chúc các bạn nữ hôm nay 'vùng lên' thành công, tiền đầy túi, tình đầy tim nhé! 🚀",
    "Mùng 8/3 chúc chị em trẻ trung như heo sữa, bốc lửa như heo quay và hăng say như heo con! 🐷"
];

// 2. Xử lý sự kiện nhấn nút lấy lời chúc
const btnWish = document.getElementById('btn-wish');
const wishDisplay = document.getElementById('wish-display');
const audio = document.getElementById('bg-audio'); // Lấy thẻ audio

btnWish.addEventListener('click', () => {
    // 1. Hiện lời chúc (giữ nguyên code cũ)
    const randomIndex = Math.floor(Math.random() * wishes.length);
    wishDisplay.style.opacity = 0;
    setTimeout(() => {
        wishDisplay.innerText = wishes[randomIndex];
        wishDisplay.style.opacity = 1;
    }, 200);

    // 2. Bắn pháo hoa bằng icon hoa và tim
    const scalar = 2;
    const flower = confetti.shapeFromText({ text: '🌸', scalar });
    const rose = confetti.shapeFromText({ text: '🌹', scalar });
    const heart = confetti.shapeFromText({ text: '❤️', scalar });

    confetti({
        shapes: [flower, rose, heart],
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 }, // Bắn lên từ vị trí nút bấm
        colors: ['#ff4d6d', '#ff85a1', '#ffb3c1']
    });

    // 3. Phát nhạc (giữ nguyên code cũ)
    if (audio.paused) {
        audio.play();
    }
    // Xử lý nhạc chuyên nghiệp hơn
    if (audio) {
        audio.play().then(() => {
            console.log("Nhạc đang phát thành công!");
        }).catch(error => {
            console.error("Lỗi phát nhạc:", error);
            alert("Không thể phát nhạc. Hãy kiểm tra đường dẫn file hoặc cài đặt trình duyệt!");
        });
    }
    generateQRCode();
}
// ,{ once: true }
);
// 3. Hàm tạo hiệu ứng trái tim bay
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Các biểu tượng khác nhau cho sinh động
    const icons = ['❤️', '💖', '🌸', '💕', '🌹'];
    heart.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s
    heart.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}


document.addEventListener('mousemove', (e) => {
    // Chỉ tạo trái tim khi di chuyển chuột (giới hạn tần suất để tránh lag)
    if (Math.random() > 0.9) { 
        const heart = document.createElement('span');
        heart.classList.add('mouse-heart');
        heart.innerText = '❤️'; // Bạn có thể đổi sang '🌸' hoặc '✨'
        
        // Vị trí xuất hiện ngay con trỏ
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        
        document.body.appendChild(heart);
        
        // Tự động xóa sau khi hiệu ứng kết thúc
        setTimeout(() => {
            heart.remove();
        }, 800);
    }

    // Di chuyển nhẹ lớp nền để tạo hiệu ứng 3D
    const bg = document.getElementById('bg-animation');
    if (bg) { // Kiểm tra xem bg có khác null không
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});


// Chạy hiệu ứng trái tim sau mỗi 400ms
setInterval(createHeart, 400);


function generateQRCode() {
    const qrContainer = document.getElementById('qrcode-container');
    const qrElement = document.getElementById('qrcode');
    
    // Xóa QR cũ nếu có
    qrElement.innerHTML = "";
    
    // Hiển thị vùng chứa
    qrContainer.style.display = "block";

    // Khởi tạo QR Code
    new QRCode(qrElement, {
        text: window.location.href, // Link hiện tại của trang web
        width: 128,
        height: 128,
        colorDark : "#ff4d6d",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// const inputName = document.getElementById('input-name');
// const userNameSpan = document.getElementById('user-name');
// const qrElement = document.getElementById('qrcode');
// const qrContainer = document.getElementById('qrcode-container');

// // Hàm cập nhật QR tự động
// function updateAutoQR(nameValue) {
//     // 1. Cập nhật URL trên thanh địa chỉ mà không load lại trang
//     const newUrl = new URL(window.location.href);
//     newUrl.searchParams.set('name', nameValue);
//     window.history.pushState({}, '', newUrl);

//     // 2. Hiển thị container và xóa QR cũ
//     qrContainer.style.display = "block";
//     qrElement.innerHTML = "";

//     // 3. Tạo QR mới theo URL đã cập nhật
//     new QRCode(qrElement, {
//         text: newUrl.href,
//         width: 120,
//         height: 120,
//         colorDark : "#ff4d6d",
//         colorLight : "#ffffff"
//     });
// }

// // Lắng nghe sự kiện gõ tên
// inputName.addEventListener('input', (e) => {
//     const value = e.target.value || "Bạn";
//     userNameSpan.innerText = value; // Đổi tên hiển thị trên h1 ngay lập tức
    
//     // Cập nhật QR tự động (Debounce nhẹ để tránh tạo quá nhiều QR khi gõ nhanh)
//     clearTimeout(window.qrTimer);
//     window.qrTimer = setTimeout(() => {
//         updateAutoQR(value);
//     }, 500); // Đợi 500ms sau khi ngừng gõ mới tạo QR
// });

function createBackgroundStars() {
    const bg = document.getElementById('bg-animation');
    const starCount = 80; // Số lượng hạt ở nền

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Kích thước ngẫu nhiên từ 2px đến 5px
        const size = Math.random() * 3 + 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        // Vị trí ngẫu nhiên
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Thời gian lấp lánh ngẫu nhiên cho từng hạt
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        star.style.animationDelay = Math.random() * 5 + 's';

        bg.appendChild(star);
    }
}

// Gọi hàm ngay khi trang web tải xong
window.addEventListener('DOMContentLoaded', createBackgroundStars);


let isTyping = false; // Biến kiểm tra để tránh trùng lặp khi nhấn nút liên tục

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("wish-display").innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
        
        // Tốc độ gõ: 50ms mỗi chữ
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 50);
    } else if (typeof fnCallback == 'function') {
        // Sau khi gõ xong, xóa con trỏ sau 1 giây
        setTimeout(fnCallback, 1000);
    }
}

// Thay đổi logic trong sự kiện Click của btnWish
btnWish.addEventListener('click', () => {
    if (isTyping) return; // Nếu đang gõ thì không cho bấm tiếp

    const randomIndex = Math.floor(Math.random() * wishes.length);
    const selectedWish = wishes[randomIndex];
    
    isTyping = true;
    wishDisplay.style.opacity = 1;
    
    // Gọi hàm gõ chữ
    typeWriter(selectedWish, 0, () => {
        isTyping = false;
        // Xóa con trỏ khi hoàn tất
        document.getElementById("wish-display").innerHTML = selectedWish;
    });

    // Các hiệu ứng khác (Pháo hoa, nhạc...) giữ nguyên như cũ
    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    if (audio) audio.play();
});


// Hiệu ứng khi chạm tay trên điện thoại
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const heart = document.createElement('span');
    heart.classList.add('mouse-heart');
    heart.innerText = '❤️';
    
    heart.style.left = touch.clientX + 'px';
    heart.style.top = touch.clientY + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 800);
});