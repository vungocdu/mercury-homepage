import type { Article } from '@/lib/articles/types'

const article: Article = {
    slug: 'cham-cong-quan-ly-ca-nha-may',
    language: 'vi',
    title: 'Chấm công và quản lý ca làm việc cho nhà máy',
    description: 'Các bước xác định quy tắc ca, xử lý dữ liệu chấm công và đối soát trước khi chuyển dữ liệu cho bộ phận tính lương.',
    answer: 'Quản lý chấm công nhà máy cần kết hợp lịch ca, dữ liệu ghi nhận thời gian và các đơn điều chỉnh đã duyệt. Doanh nghiệp nên thống nhất quy tắc theo từng nhóm nhân sự, xử lý ngoại lệ minh bạch và đối soát trước khi chuyển dữ liệu sang tính lương.',
    sections: [
      {
        heading: 'Vì sao lịch ca và dữ liệu chấm công cần đi cùng nhau?',
        paragraphs: [
          'Một thời điểm vào hoặc ra chỉ có ý nghĩa khi được đặt trong bối cảnh lịch làm việc của nhân viên. Nhà máy có thể có ca ngày, ca đêm, ca xoay và nhiều địa điểm làm việc. Nếu chỉ dựa vào giờ trên thiết bị, người quản lý khó phân biệt đi muộn, đổi ca đã duyệt hay thiếu lượt ghi nhận.',
          'Hãy bắt đầu bằng sơ đồ tổ chức, nhóm nhân sự và cách lập lịch hiện tại. Ghi rõ ai xếp ca, ai có quyền thay đổi, nhân viên xem lịch ở đâu và bộ phận nào chịu trách nhiệm khi lịch không khớp thực tế. Điều này giúp phân biệt dữ liệu kế hoạch với dữ liệu đã phát sinh.',
        ],
      },
      {
        heading: 'Mô tả quy tắc ca bằng tình huống cụ thể',
        paragraphs: [
          'Với mỗi loại ca, xác định giờ bắt đầu, kết thúc, khoảng nghỉ và cách nhận diện ca qua ngày. Nếu có ca linh hoạt hoặc thay đổi theo tổ, cần ghi rõ điều kiện áp dụng và thời điểm quy tắc có hiệu lực. Cùng một nhân viên có thể chuyển bộ phận hoặc lịch làm việc; lịch sử áp dụng cần đủ rõ để giải thích kết quả của từng ngày.',
          'Dùng ví dụ thực tế để thống nhất cách tính: nhân viên làm ca đêm, đổi ca sau khi lịch đã công bố, nghỉ giữa ca hoặc có nhiều lượt vào ra. Thay vì yêu cầu chung chung như “tự động tính công”, hãy ghi đầu vào, kết quả mong đợi và người xác nhận cho từng trường hợp. Quy tắc lương và chính sách nội bộ cần được doanh nghiệp xác nhận riêng.',
        ],
      },
      {
        heading: 'Từ lượt ghi nhận đến bảng công có thể kiểm tra',
        paragraphs: [
          'Dữ liệu có thể đến từ thiết bị chấm công hoặc những nguồn được doanh nghiệp cho phép. Cần lưu được nguồn, thời điểm và định danh nhân viên để người phụ trách kiểm tra khi có sai lệch. Quy trình tiếp nhận cũng cần dự kiến thiết bị mất kết nối, dữ liệu đến muộn, bản ghi trùng hoặc không nhận diện được nhân viên.',
          'Bảng công nên cho phép đối chiếu lịch ca, lượt ghi nhận và các điều chỉnh đã được duyệt. Một kết quả tổng hợp cần có khả năng truy lại các dữ liệu tạo nên kết quả đó; nếu điều chỉnh, cần biết người thực hiện, lý do và thời điểm. Nhân viên và quản lý cũng cần một kênh rõ ràng để phát hiện và phản hồi sai sót.',
        ],
        bullets: [
          'Thiếu lượt vào hoặc ra: đánh dấu để kiểm tra, tránh tự suy diễn.',
          'Đổi ca hoặc nghỉ: đối chiếu với thông tin và trạng thái phê duyệt.',
          'Dữ liệu đến muộn: xác định ai kiểm tra và khi nào bảng công được cập nhật.',
        ],
      },
      {
        heading: 'Tổ chức phê duyệt và chốt kỳ công',
        paragraphs: [
          'Đơn nghỉ, đổi ca, tăng ca và điều chỉnh công cần có người đề xuất, người duyệt và trạng thái dễ theo dõi. Khi một đơn thay đổi sau khi bảng công đã được đối chiếu, doanh nghiệp cần quyết định ai được mở lại dữ liệu và thông báo cho bộ phận liên quan như thế nào.',
          'Trước khi chuyển dữ liệu cho bộ phận tính lương, hãy đối chiếu các trường hợp chưa đủ thông tin, kiểm tra tổng hợp theo bộ phận và xác nhận người chịu trách nhiệm chốt. Thiết lập quyền xem phù hợp vì dữ liệu nhân sự và thu nhập không cần được chia sẻ cho mọi vai trò.',
        ],
      },
      {
        heading: 'Chuẩn bị triển khai theo phạm vi thực tế',
        paragraphs: [
          'Có thể bắt đầu khảo sát một nhóm ca đại diện, thu thập mẫu lịch, dữ liệu ghi nhận và các trường hợp điều chỉnh. Đối chiếu kết quả với người quản lý ca và nhân sự trước khi mở rộng. Mỗi bước cần có danh sách vấn đề còn tồn đọng và cách xử lý, thay vì chỉ kiểm tra giao diện.',
          'Dự án TNA Fujikin được Mercury giới thiệu trong lĩnh vực chấm công và quản lý nhân sự nhà máy. Trang dự án cung cấp bối cảnh tham khảo; giải pháp cho doanh nghiệp khác vẫn cần dựa trên thiết bị, quy tắc và quy trình phê duyệt của chính đơn vị đó.',
        ],
      },
    ],
    links: [
      { label: 'Xem dự án TNA Fujikin', href: '/vi/work/tna-fujikin/' },
      { label: 'Dịch vụ phát triển phần mềm', href: '/vi/services/software-development/' },
      { label: 'Trao đổi nhu cầu với Mercury', href: '/vi/contact/' },
    ],
  }

export default article
