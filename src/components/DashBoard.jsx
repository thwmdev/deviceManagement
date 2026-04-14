function DashBoard() {
    const stats = [
    { label: "Tổng tài sản", value: 122 },
    { label: "Chưa cấp phát", value: 106 },
    { label: "Đang sử dụng", value: 15 },
    { label: "Hỏng", value: 1 },
  ]

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {stats.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "20px" }}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashBoard