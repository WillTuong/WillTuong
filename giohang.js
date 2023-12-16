//phân trang
  document.addEventListener("DOMContentLoaded", function () {
   const items = document.querySelectorAll(".sp");
   const itemsPerPage = 8; // Số lượng sản phẩm mỗi trang
   const pagination = document.getElementById("pagination");

   function displayItems(startIndex, endIndex) {
       items.forEach((item, index) => {
           if (index >= startIndex && index < endIndex) {
               item.style.display = "block";
           } else {
               item.style.display = "none";
           }
       });
   }

   function generatePaginationLinks() {
       const pageCount = Math.ceil(items.length / itemsPerPage);

       for (let i = 1; i <= pageCount; i++) {
           const li = document.createElement("li");
           li.textContent = i;
           li.addEventListener("click", function () {
               const startIndex = (i - 1) * itemsPerPage;
               const endIndex = i * itemsPerPage;
               displayItems(startIndex, endIndex);
           });
           pagination.appendChild(li);
       }
   }

   generatePaginationLinks();
   displayItems(0, itemsPerPage);
});// Mã JavaScript cho phân trang
//tìm kiếm sản phẩm
document.addEventListener('DOMContentLoaded', function () {
    // Lấy danh sách tất cả các sản phẩm
    var allProducts = document.querySelectorAll('.sp');

    // Lắng nghe sự kiện input trên ô nhập liệu
    var searchInput = document.querySelector('.sb_input');
    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase(); // Lấy giá trị nhập liệu và chuyển về chữ thường

        // Duyệt qua tất cả sản phẩm và ẩn/hiện sản phẩm dựa trên kết quả tìm kiếm
        allProducts.forEach(function (product) {
            var productName = product.innerText.toLowerCase(); // Lấy tên sản phẩm và chuyển về chữ thường
            var productVisible = productName.includes(searchTerm); // Kiểm tra xem tên sản phẩm có chứa từ khóa tìm kiếm không

            // Ẩn/hiện sản phẩm tùy thuộc vào kết quả tìm kiếm
            if (productVisible) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
//phân loại sản phẩm
 // Hàm để lọc sản phẩm dựa trên nhãn hiệu được chọn
 function filterProducts() {
    // Lấy nhãn hiệu được chọn từ dropdown
    var nhapNhanHieu = document.getElementById("brandSelector").value;

    // Lấy tất cả các phần tử sản phẩm
    var cacSanPham = document.querySelectorAll(".dt .sp");

    // Lặp qua từng phần tử sản phẩm
    for (var i = 0; i < cacSanPham.length; i++) {
        // Lấy giá trị thuộc tính data-brand cho sản phẩm hiện tại
        var nhanHieuSanPham = cacSanPham[i].getAttribute("data-brand");

        // Kiểm tra xem nhãn hiệu được chọn có phải là "all" hoặc khớp với nhãn hiệu của sản phẩm không
        if (nhapNhanHieu === "all" || nhapNhanHieu === nhanHieuSanPham) {
            // Hiển thị sản phẩm nếu nó khớp với nhãn hiệu được chọn
            cacSanPham[i].style.display = "block";
        } else {
            // Ẩn sản phẩm nếu nó không khớp với nhãn hiệu được chọn
            cacSanPham[i].style.display = "none";
        }
    }
}