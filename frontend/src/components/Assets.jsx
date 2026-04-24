function Assets() {
  return (
    <>
      <h1>Danh sách tài sản</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Mã TS</th>
            <th>Tên tài sản</th>
            <th>Trạng thái</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TS.123</td>
            <td>Vòng cổ</td>
            <td>Chờ cấp phát</td>
          </tr>

          <tr>
            <td>875</td>
            <td>Hub Baseus 9in1</td>
            <td>Đang sử dụng</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Assets