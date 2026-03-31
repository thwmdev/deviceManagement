import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <html lang="vi">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Danh sách tài sản</title>
      </head>
      <body>
        <div className="app-shell">
          <aside className="sidebar">
            <div className="sidebar__top">
              <button className="icon-button" aria-label="Mở menu">☰</button>
            </div>

            <nav className="sidebar__nav" aria-label="Điều hướng chính">
              <a href="#" className="sidebar__link">Dashboard</a>
              <a href="#" className="sidebar__link sidebar__link--active">Tài sản</a>
              <a href="#" className="sidebar__link">Cấp phát</a>
              <a href="#" className="sidebar__link">Thu hồi</a>
              <a href="#" className="sidebar__link">Khấu hao</a>
            </nav>
          </aside>

          <main className="main-content">
            <header className="page-header">
              <div className="page-header__left">
                <button className="icon-button" aria-label="Thêm mới">＋</button>
                <h1 className="page-title">Danh sách tài sản</h1>
              </div>

              <div className="page-header__right">
                <div className="search-box">
                  <input type="search" className="search-box__input" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
                </div>
                <button className="filter-button" type="button">LỐI TẮT</button>
                <button className="icon-button" aria-label="Thông báo">🔔</button>
                <button className="icon-button" aria-label="Ứng dụng">⣿</button>
                <button className="icon-button" aria-label="Tài khoản">◉</button>
              </div>
            </header>

            <section className="status-tabs" aria-label="Trạng thái tài sản">
              <button className="status-tab status-tab--active">Tất cả (122)</button>
              <button className="status-tab">Chưa cấp phát (106)</button>
              <button className="status-tab">Đang sử dụng (15)</button>
              <button className="status-tab">Thanh lý (0)</button>
              <button className="status-tab">Bảo trì, sửa chữa (0)</button>
              <button className="status-tab">Mất (0)</button>
              <button className="status-tab">Hủy (0)</button>
              <button className="status-tab">Hỏng (1)</button>
            </section>

            <section className="toolbar">
              <div className="toolbar__left">
                <button className="text-button" type="button">Nhân</button>
                <button className="text-button" type="button">Export</button>
                <button className="text-button" type="button">Import</button>
                <button className="text-button" type="button">HDSD</button>
              </div>

              <div className="toolbar__right">
                <span className="toolbar__info">Hiển thị 1 - 50 trong số 122 bản ghi</span>
                <button className="icon-button" aria-label="Tìm trong bảng">🔍</button>
                <button className="icon-button" aria-label="Trang trước">‹</button>
                <button className="icon-button" aria-label="Trang sau">›</button>
              </div>
            </section>

            <section className="table-section">
              <table className="asset-table">
                <thead>
                  <tr>
                    <th><input type="checkbox" aria-label="Chọn tất cả" /></th>
                    <th>Mã TS</th>
                    <th>Tên tài sản</th>
                    <th>Loại tài sản</th>
                    <th>Ngày mua</th>
                    <th>Số lượng</th>
                    <th>Số lượng cấp phát</th>
                    <th>SL còn lại</th>
                    <th>Trạng thái</th>
                    <th>Nguyên giá</th>
                    <th>Người sử dụng</th>
                    <th>Phòng ban sử dụng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng TS.123" /></td>
                    <td>TS.123</td>
                    <td>Vòng cổ</td>
                    <td></td>
                    <td>01/10/2023</td>
                    <td>10</td>
                    <td>0</td>
                    <td>10</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng TS.122" /></td>
                    <td>TS.122</td>
                    <td>Áo</td>
                    <td></td>
                    <td>27/11/2023</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td><span className="badge badge--broken">Hỏng</span></td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 906" /></td>
                    <td>906</td>
                    <td>Micro Saraonic BlinkMe B2 (Bộ micro + Full phụ kiện)</td>
                    <td>Micro</td>
                    <td>11/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>6,870,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 898" /></td>
                    <td>898</td>
                    <td>Màn hình Philips 27" 276B1</td>
                    <td>Màn hình</td>
                    <td>06/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>7,690,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 897" /></td>
                    <td>897</td>
                    <td>Màn hình Philips 27" 276B1</td>
                    <td>Màn hình</td>
                    <td>06/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>7,690,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 896" /></td>
                    <td>896</td>
                    <td>Màn hình Philips 27" 276B1</td>
                    <td>Màn hình</td>
                    <td>06/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>7,690,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 895" /></td>
                    <td>895</td>
                    <td>Samsung Galaxy A54 5G + Ốp + Củ sạc</td>
                    <td>Điện thoại</td>
                    <td>16/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>10,333,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 894" /></td>
                    <td>894</td>
                    <td>Samsung Galaxy A34 5G + Ốp + Củ sạc</td>
                    <td>Điện thoại</td>
                    <td>16/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>8,048,300</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 876" /></td>
                    <td>876</td>
                    <td>Hub Baseus 9in1</td>
                    <td>HUB</td>
                    <td>13/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>880,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 875" /></td>
                    <td>875</td>
                    <td>Hub Baseus 9in1</td>
                    <td>HUB</td>
                    <td>13/10/2023</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td><span className="badge badge--using">Đang sử dụng</span></td>
                    <td>880,000</td>
                    <td>Đỗ Tiến Minh Quân</td>
                    <td>Bếp BBQ</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 874" /></td>
                    <td>874</td>
                    <td>Hub Baseus 9in1</td>
                    <td>HUB</td>
                    <td>13/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>880,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 873" /></td>
                    <td>873</td>
                    <td>Máy tính để bàn</td>
                    <td>Máy tính cây</td>
                    <td>16/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span className="badge badge--pending">Chờ cấp phát</span></td>
                    <td>32,500,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" aria-label="Chọn dòng 872" /></td>
                    <td>872</td>
                    <td>Viewsonic VP2757-2K/27inch</td>
                    <td>Màn hình</td>
                    <td>16/10/2023</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td><span class="badge badge--pending">Chờ cấp phát</span></td>
                    <td>6,900,000</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </body>
      </html>

    </>
  )
}

export default App
