import type { Article } from '@/lib/articles/types'

const article: Article = {
    slug: 'erp-nganh-duoc-tich-hop-kho-ban-hang',
    language: 'vi',
    title: 'ERP ngành dược: kết nối bán hàng, kho và tài chính',
    description: 'Cách xác định phạm vi ERP ngành dược, kết nối dữ liệu bán hàng, kho và tài chính, và chuẩn bị triển khai theo từng giai đoạn.',
    answer: 'ERP giúp doanh nghiệp kết nối dữ liệu và quy trình bán hàng, kho, mua hàng và tài chính. Để triển khai hiệu quả, cần thống nhất dữ liệu dùng chung, luồng chứng từ và trách nhiệm của từng bộ phận trước khi chọn tính năng hoặc tích hợp.',
    sections: [
      {
        heading: 'Bắt đầu từ luồng hàng và luồng thông tin',
        paragraphs: [
          'Một đơn bán hàng có thể đi qua bộ phận kinh doanh, kho, giao nhận và tài chính. Nếu mỗi bộ phận cập nhật một bảng riêng, cùng một đơn có thể xuất hiện với nhiều trạng thái và số lượng khác nhau. ERP cần cho mọi người thấy thông tin cần thiết tại điểm bàn giao, đồng thời xác định rõ ai được tạo, xác nhận hoặc điều chỉnh chứng từ.',
          'Hãy vẽ quy trình từ lúc nhận đơn đến khi giao hàng và đối chiếu công nợ. Với từng bước, ghi lại người thực hiện, dữ liệu đầu vào, kết quả và hệ thống đang sử dụng. Cũng cần mô tả các trường hợp trả hàng, hủy đơn, giao thiếu hoặc điều chỉnh sau khi đã xác nhận; đây thường là những điểm làm phát sinh sai lệch khi chỉ thiết kế theo luồng thuận.',
        ],
      },
      {
        heading: 'Thống nhất dữ liệu giữa bán hàng, kho và mua hàng',
        paragraphs: [
          'Danh mục sản phẩm, đơn vị tính, khách hàng, nhà cung cấp và địa điểm kho là nền tảng để các bộ phận trao đổi dữ liệu. Mỗi danh mục cần có người chịu trách nhiệm tạo và sửa, quy tắc nhận diện bản ghi trùng, cùng cách xử lý khi dữ liệu cũ thiếu hoặc không nhất quán.',
          'Với hàng hóa được quản lý theo lô và hạn dùng, cần làm rõ thông tin nào được ghi nhận khi nhập, xuất, chuyển kho và trả hàng. Chính sách chọn lô, cách xử lý hàng bị giữ hoặc không thể xuất phải được nghiệp vụ xác nhận. Không nên giả định chỉ cần hiển thị số tồn tổng là đủ để quyết định giao hàng.',
        ],
        bullets: [
          'Bán hàng: khách hàng, bảng giá, đơn hàng và trạng thái xử lý.',
          'Kho: sản phẩm, lô, hạn dùng, địa điểm và lịch sử nhập xuất.',
          'Mua hàng và tài chính: đơn mua, chứng từ, công nợ và thông tin đối chiếu.',
        ],
      },
      {
        heading: 'Thiết kế tích hợp và cách xử lý ngoại lệ',
        paragraphs: [
          'Trước khi kết nối kênh bán hàng hoặc đơn vị giao nhận, hãy xác định hệ thống nào là nguồn dữ liệu gốc cho từng loại thông tin. Ghi rõ thời điểm gửi, dữ liệu bắt buộc và trạng thái phản hồi. Ví dụ, một đơn đã được tiếp nhận ở hệ thống bán hàng chưa đồng nghĩa kho đã xác nhận khả năng xuất hàng.',
          'Thiết kế cần dự kiến kết nối gián đoạn, đơn được gửi lại, mã hàng không khớp và thay đổi phát sinh ở cả hai hệ thống. Người vận hành cần biết bản ghi nào lỗi, lý do, cách sửa và cách gửi lại mà không tạo giao dịch trùng. Đối soát định kỳ giữa số lượng đơn, trạng thái và chứng từ giúp phát hiện các trường hợp chưa xử lý hết.',
        ],
      },
      {
        heading: 'Chọn phạm vi đầu tiên có thể kiểm chứng',
        paragraphs: [
          'Không nhất thiết đưa mọi bộ phận vào cùng một đợt. Doanh nghiệp có thể chọn một luồng có điểm bàn giao rõ, chẳng hạn từ đơn bán hàng đến xác nhận xuất kho. Trước khi chạy thử, làm sạch dữ liệu mẫu, phân quyền theo nhiệm vụ và thống nhất cách so sánh kết quả giữa quy trình cũ và quy trình mới.',
          'Người dùng nghiệp vụ nên kiểm thử cả tình huống thường gặp lẫn ngoại lệ: đơn trùng, thiếu hàng, đổi số lượng và trả hàng. Ghi lại sai lệch, người xử lý và tiêu chí hoàn tất trước khi mở rộng. Các chỉ số như số lỗi đối soát hoặc thời gian xử lý chỉ có ý nghĩa khi doanh nghiệp xác định cách đo và thu thập dữ liệu thực tế.',
        ],
      },
      {
        heading: 'Tham khảo dự án HMB và chuẩn bị trao đổi',
        paragraphs: [
          'Theo mô tả dự án HMB ERP, hệ thống kết nối quản trị tổ chức, bán hàng, kho vận, tài chính và mua hàng; đồng bộ đơn hàng Haravan và kết nối Viettel Post cùng các hệ thống nghiệp vụ hiện có. Đây là ví dụ về phạm vi kết nối, còn quy trình và yêu cầu cụ thể cần được khảo sát theo từng doanh nghiệp.',
          'Để bắt đầu, hãy chuẩn bị sơ đồ quy trình hiện tại, danh sách hệ thống, mẫu chứng từ và các vấn đề đối soát thường gặp. Xác định đại diện bán hàng, kho, mua hàng và tài chính cùng tham gia để thống nhất ưu tiên và tiêu chí nghiệm thu.',
        ],
      },
    ],
    links: [
      { label: 'Xem dự án HMB ERP', href: '/vi/work/hmb-erp/' },
      { label: 'Dịch vụ phát triển phần mềm', href: '/vi/services/software-development/' },
      { label: 'Trao đổi nhu cầu với Mercury', href: '/vi/contact/' },
    ],
  }

export default article
