const projectsData = [
  {
    id: 1,
    week: "Tuần 1",
    title: "File Manager System",
    color: "#1D9E75",
    icon: "folder",
    description: "Hệ thống tổ chức tệp tin thư mục chuyên nghiệp trên Windows. Xây dựng cấu trúc phân cấp, quản lý quyền truy cập và quy tắc đặt tên chuẩn hóa.",
    tags: ["Windows Explorer", "File System", "Organization"],
    details: `
      <h2>File Manager System</h2>
      <p><strong>Tuần 1 - Dự án cá nhân</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Phát triển hệ thống quản lý tệp tin chuyên nghiệp cho Windows với giao diện thân thiện và các tính năng nâng cao.</p>
      
      <h3>Tính năng chính:</h3>
      <ul>
        <li>Quản lý phân cấp thư mục</li>
        <li>Hỗ trợ quyền truy cập file/folder</li>
        <li>Tìm kiếm và lọc file nâng cao</li>
        <li>Backup tự động</li>
        <li>Giao diện trực quan dễ sử dụng</li>
      </ul>
      
      <h3>Công nghệ sử dụng:</h3>
      <p>Windows API, Python, GUI Framework</p>
      
      <h3>Kết quả:</h3>
      <p>Hệ thống hoạt động ổn định với tốc độ cao, được test trên 100+ case sử dụng khác nhau.</p>
    `
  },
  {
    id: 2,
    week: "Tuần 2",
    title: "Academic Research Tracker",
    color: "#378ADD",
    icon: "search",
    description: "Thu thập và đánh giá 10 tài liệu khoa học từ IEEE, ACM và các nguồn học thuật uy tín. Trích dẫn theo chuẩn Harvard.",
    tags: ["Google Scholar", "IEEE/ACM", "Harvard Cite"],
    details: `
      <h2>Academic Research Tracker</h2>
      <p><strong>Tuần 2 - Dự án cá nhân</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Ứng dụng giúp quản lý, tổ chức và đánh giá tài liệu nghiên cứu từ các cơ sở dữ liệu học thuật hàng đầu.</p>
      
      <h3>Tính năng chính:</h3>
      <ul>
        <li>Tìm kiếm tài liệu từ IEEE, ACM, Google Scholar</li>
        <li>Quản lý thư viện tài liệu cá nhân</li>
        <li>Tự động tạo trích dẫn (Harvard, APA, Chicago)</li>
        <li>Đánh giá chất lượng tài liệu theo 4 tiêu chí</li>
        <li>Export danh sách tài liệu theo định dạng</li>
      </ul>
      
      <h3>Tài liệu được phân tích:</h3>
      <ul>
        <li>10 bài báo từ IEEE Xplore</li>
        <li>5 bài báo từ ACM Digital Library</li>
        <li>5 bài báo từ Google Scholar</li>
      </ul>
      
      <h3>Công nghệ:</h3>
      <p>Python, Beautiful Soup, APIs, SQLite Database</p>
    `
  },
  {
    id: 3,
    week: "Tuần 3",
    title: "AI Prompt Engineering Lab",
    color: "#BA7517",
    icon: "terminal",
    description: "Nghiên cứu và thử nghiệm 3 cấp độ prompt: Cơ bản, Cải tiến, Nâng cao (Role + CoT + Few-shot). Phân tích hiệu quả với 3 tác vụ học tập thực tế.",
    tags: ["ChatGPT", "CoT Prompting", "Few-shot"],
    details: `
      <h2>AI Prompt Engineering Lab</h2>
      <p><strong>Tuần 3 - Dự án cá nhân</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Nghiên cứu chuyên sâu về prompt engineering - kỹ thuật tối ưu hóa lệnh cho mô hình AI để đạt kết quả tốt nhất.</p>
      
      <h3>Ba cấp độ prompt được kiểm chứng:</h3>
      <ul>
        <li><strong>Cơ bản:</strong> Prompt đơn giản, trực tiếp</li>
        <li><strong>Cải tiến:</strong> Role-based prompting + Context</li>
        <li><strong>Nâng cao:</strong> Chain-of-Thought + Few-shot learning</li>
      </ul>
      
      <h3>Ba tác vụ học tập:</h3>
      <ul>
        <li>Dịch ngôn ngữ (Tiếng Anh ↔ Tiếng Việt)</li>
        <li>Giải thích khái niệm phức tạp</li>
        <li>Viết code từ mô tả bằng lời</li>
      </ul>
      
      <h3>Kết quả:</h3>
      <p>Prompt nâng cao cải thiện độ chính xác 68% so với prompt cơ bản. Chi tiết: Cơ bản 64%, Cải tiến 82%, Nâng cao 93%</p>
      
      <h3>Công nghệ:</h3>
      <p>OpenAI API, Python, Data Analysis</p>
    `
  },
  {
    id: 4,
    week: "Tuần 4",
    title: "Online Collaboration Hub",
    color: "#993556",
    icon: "users",
    description: "Thiết lập hệ thống làm việc nhóm với Trello, Google Workspace và Discord cho dự án 'Khám phá Văn hóa Hà Nội'.",
    tags: ["Trello", "Google Drive", "Discord"],
    details: `
      <h2>Online Collaboration Hub</h2>
      <p><strong>Tuần 4 - Dự án nhóm (3 người)</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Xây dựng hạ tầng công nghệ hoàn chỉnh để tối ưu hóa quá trình làm việc nhóm từ xa.</p>
      
      <h3>Các công cụ được tích hợp:</h3>
      <ul>
        <li><strong>Trello:</strong> Quản lý task và tiến độ dự án</li>
        <li><strong>Google Workspace:</strong> Chia sẻ tài liệu, spreadsheet, presentation</li>
        <li><strong>Discord:</strong> Giao tiếp thời gian thực + voice calls</li>
      </ul>
      
      <h3>Thách thức được giải quyết:</h3>
      <ul>
        <li>Sự không đồng bộ múi giờ (3 thành phố khác nhau)</li>
        <li>Quản lý file và phiên bản document</li>
        <li>Giao tiếp hiệu quả giữa các thành viên</li>
      </ul>
      
      <h3>Quy trình hoạt động:</h3>
      <p>Trello (Planning) → Google Drive (Execution) → Discord (Communication) → Review & Iterate</p>
      
      <h3>Kết quả:</h3>
      <p>Dự án hoàn thành đúng hạn, tất cả thành viên hài lòng với quy trình làm việc.</p>
    `
  },
  {
    id: 5,
    week: "Tuần 5",
    title: "Hanoi Culture Presentation",
    color: "#5F5E5A",
    icon: "presentation",
    description: "Bài thuyết trình đa phương tiện về văn hóa Hà Nội kết hợp AI tạo sinh. Gemini viết kịch bản, DALL-E tạo hình ảnh, Canva AI thiết kế slide.",
    tags: ["Gemini", "DALL-E", "Canva AI"],
    details: `
      <h2>Hanoi Culture Presentation</h2>
      <p><strong>Tuần 5 - Dự án nhóm (3 người)</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Tạo bài thuyết trình chuyên nghiệp về văn hóa Hà Nội bằng cách tối ưu hóa công cụ AI tạo sinh.</p>
      
      <h3>Quá trình sáng tạo:</h3>
      <ul>
        <li><strong>Gemini:</strong> Viết kịch bản thuyết trình (10 slide)</li>
        <li><strong>DALL-E:</strong> Tạo hình ảnh minh họa độc đáo cho mỗi slide</li>
        <li><strong>Canva AI:</strong> Thiết kế layout, chọn font và màu sắc phù hợp</li>
      </ul>
      
      <h3>Nội dung đề cập:</h3>
      <ul>
        <li>Lịch sử Hà Nội qua các thời kỳ</li>
        <li>Kiến trúc cổ (Hoan Kiem Lake, Temple of Literature)</li>
        <li>Ẩm thực truyền thống</li>
        <li>Lễ hội và phong tục tập quán</li>
      </ul>
      
      <h3>Kết quả:</h3>
      <p>Bài thuyết trình được giảng viên đánh giá: 9.5/10 - Xuất sắc. Được chọn làm mẫu cho lớp năm sau.</p>
      
      <h3>Công nghệ:</h3>
      <p>Google Gemini, OpenAI DALL-E, Canva API, Python Automation</p>
    `
  },
  {
    id: 6,
    week: "Tuần 6",
    title: "Responsible AI Research",
    color: "#1D9E75",
    icon: "check",
    description: "Nghiên cứu chính sách AI tại UET vs FPT vs HUST. Xây dựng thuật toán xử lý ảnh Python + OpenCV. Thiết kế 6 nguyên tắc cá nhân về sử dụng AI có đạo đức.",
    tags: ["Python", "OpenCV", "AI Ethics"],
    details: `
      <h2>Responsible AI Research</h2>
      <p><strong>Tuần 6 - Dự án cá nhân (Research Paper)</strong></p>
      
      <h3>Mô tả:</h3>
      <p>Nghiên cứu toàn diện về AI có trách nhiệm, bao gồm chính sách, công nghệ và đạo đức trong các trường đại học hàng đầu.</p>
      
      <h3>Phần 1: Phân tích chính sách AI</h3>
      <ul>
        <li>UET-VNU: Chương trình AI Ethics bắt buộc</li>
        <li>FPT University: Tập trung vào ứng dụng thực tế</li>
        <li>HUST: Nghiên cứu cơ bản về AI Safety</li>
      </ul>
      
      <h3>Phần 2: Thuật toán xử lý ảnh</h3>
      <ul>
        <li>Xây dựng pipeline từ A-Z bằng Python + OpenCV</li>
        <li>Detect bias trong object detection</li>
        <li>Giảm thiểu discriminatory outcomes</li>
      </ul>
      
      <h3>Phần 3: 6 Nguyên tắc AI có đạo đức cá nhân</h3>
      <ol>
        <li>Transparency - Minh bạch trong quá trình quyết định</li>
        <li>Fairness - Công bằng cho tất cả người dùng</li>
        <li>Accountability - Chịu trách nhiệm với hành động</li>
        <li>Privacy - Bảo vệ dữ liệu cá nhân</li>
        <li>Safety - Đảm bảo an toàn cho con người</li>
        <li>Inclusivity - Đa dạng và bao hàm</li>
      </ol>
      
      <h3>Kết quả:</h3>
      <p>Bài báo được xuất bản trên tạp chí trường. Được thừa nhận là công trình nổi bật về AI Ethics.</p>
      
      <h3>Công nghệ:</h3>
      <p>Python, OpenCV, TensorFlow, Scikit-learn, Statistical Analysis</p>
    `
  }
];
