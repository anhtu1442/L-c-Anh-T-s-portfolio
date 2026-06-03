import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp, Download, ExternalLink, GraduationCap, Lightbulb, Map, MousePointerClick, ShieldCheck, Target, User, Briefcase, Star, FileText, X } from 'lucide-react';
import portraitImg from './assets/images/regenerated_image_1780487975047.jpg';
import stepA2Img4 from './assets/images/regenerated_image_1780490257457.png';
import stepA1Img2 from './assets/images/regenerated_image_1780491235468.png';
import stepA1Img3 from './assets/images/regenerated_image_1780491357552.png';
import stepA1Img4 from './assets/images/regenerated_image_1780491492887.png';
import stepA1Img5 from './assets/images/regenerated_image_1780492238429.png';
import stepA1ResultImg from './assets/images/regenerated_image_1780492480885.png';

// --- Data based on Image 1 requirements ---
const ASSIGNMENTS = [
  {
    id: 1,
    title: 'Máy tính và các thiết bị ngoại vi',
    desc: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp, kèm ảnh minh họa thao tác cơ bản.',
    icon: <MousePointerClick className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80',
    link: '/25023889_Lê Đức Anh Tú_Bài 1.pdf',
    goal: 'Hiểu rõ cấu trúc thư mục tối ưu trên máy tính cá nhân và các thao tác như tạo, đổi tên, sao chép, di chuyển, xóa, và khôi phục.',
    process: 'Em đã thực hiện thiết kế cây thư mục, quy hoạch không gian làm việc và dọn dẹp các tệp cũ. Tiếp theo, em đặt ra luật đặt tên tệp để dễ quản lý.',
    resultImg: stepA1ResultImg,
    steps: [
      {
        title: '1. Mở File Explorer & Truy cập ổ đĩa',
        desc: 'Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ. Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa.',
        image: stepA2Img4
      },
      {
        title: '2. Tạo thư mục mới',
        desc: 'Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_LeDucAnhTu. Nhấn Enter.',
        image: stepA1Img2
      },
      {
        title: '3. Tạo & Đổi tên tệp tin',
        desc: 'Vào thư mục vừa tạo. Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấp chuột phải vào tệp -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt.',
        image: stepA1Img3
      },
      {
        title: '4. Tạo thư mục con, Sao chép & Di chuyển',
        desc: 'Tạo thư mục con là TaiLieu. Copy tệp GhiChuQuanTrong.txt (Ctrl+C) vào trong TaiLieu (Ctrl+V). Tạo tệp DiChuyen.txt, Cut (Ctrl+X) rồi Paste vào thư mục TaiLieu.',
        image: stepA1Img4
      },
      {
        title: '5. Xóa & Khôi phục tệp tin',
        desc: 'Xóa tệp GhiChuQuanTrong.txt (chuyển vào Thùng rác). Trỏ vào tệp DiChuyen.txt, nhấn Shift + Delete để xóa vĩnh viễn. Mở Recycle Bin để Restore tệp GhiChuQuanTrong.txt.',
        image: stepA1Img5
      }
    ]
  },
  {
    id: 2,
    title: 'Khai thác dữ liệu và thông tin',
    desc: 'Báo cáo học thuật về tìm kiếm và đánh giá nguồn thông tin UI/UX Design.',
    icon: <Target className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&q=80',
    link: '/tmptaimh3_le_duc_anh_tu_25023889.pdf',
    goal: 'Tìm kiếm thông tin từ nhiều nguồn, đánh giá độ tin cậy và tổng hợp xếp hạng các tài liệu phục vụ học tập, nghiên cứu lĩnh vực UI/UX.',
    process: 'Lựa chọn chủ đề, thu thập từ các nguồn (Google Scholar, Website, Sách, Tạp chí) và đánh giá dựa trên tiêu chí: tác giả, nhà xuất bản, phương pháp, tính cập nhật.',
    resultImg: '',
    steps: [
      {
        title: '1. Giới thiệu & Phương pháp thực hiện',
        desc: 'Chủ đề: Nguyên tắc thiết kế UI/UX và ảnh hưởng đến trải nghiệm người dùng. Nguồn tìm kiếm đa dạng từ cơ sở dữ liệu học thuật đến sách và internet. Các nguồn này được đánh giá dựa trên Tác giả, Nhà xuất bản, Phương pháp nghiên cứu, Số lượng trích dẫn, và Tính cập nhật.'
      },
      {
        title: '2. Tổng hợp & Bảng đánh giá độ tin cậy',
        desc: 'Tổng hợp 10 tài liệu tham khảo theo chuẩn Harvard. Đánh giá độ tin cậy của các nguồn (Sách, Tiêu chuẩn Tổ chức, Học thuật, Website). Nguồn học thuật đạt độ tin cậy Cao/Rất Cao, trong khi nguồn internet ở mức Trung Bình.'
      },
      {
        title: '3. Phân tích & Thảo luận',
        desc: 'Rút ra các nguyên tắc UI/UX cốt lõi: Tính dễ sử dụng (Usability), Tính nhất quán, Phản hồi, Tối giản. Phân biệt thế mạnh của Nguồn học thuật (cơ sở lý thuyết vững chắc) và Nguồn internet (cập nhật xu hướng nhanh chóng).'
      },
      {
        title: '4. Cập nhật xu hướng & Kết luận',
        desc: 'Xác định xu hướng UI/UX hiện nay (User-centered design, Dark mode, Micro-interactions, AI trong UX). Kết luận: kết hợp nhiều nguồn giúp hiểu sâu và toàn diện hơn, kỹ năng đánh giá nguồn tin là thiết yếu trong ngành nghiên cứu công nghệ.'
      }
    ]
  },
  {
    id: 3,
    title: 'Tổng quan về Trí tuệ nhân tạo',
    desc: 'So sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.',
    icon: <Lightbulb className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80',
    link: '/25023889_Lê Đức Anh Tú_B3.pdf',
    goal: 'Sử dụng hiệu quả các công cụ AI (như ChatGPT, Gemini) bằng cách tạo prompt tối ưu.',
    process: 'Em bắt đầu bằng một prompt đơn giản, sau đó phân tích điểm thiếu sót ở kết quả trả về. Dựa vào đó, em tinh chỉnh thêm vai trò, ngữ cảnh và định dạng yêu cầu đầu ra để có một prompt hoàn chỉnh.',
    resultImg: '',
    resultText: (
      <div className="text-sm font-sans space-y-4 font-light leading-relaxed">
        <p>Từ quá trình thực nghiệm, em đúc kết được công thức <strong className="font-bold">C.R.E.A.T.E</strong> để tối ưu hóa prompt trong học tập:</p>
        <ul className="list-decimal pl-5 space-y-2">
          <li><strong className="font-bold">C - Context (Ngữ cảnh):</strong> Luôn cung cấp bối cảnh cụ thể (Đang làm bài tập gì? Học phần nào? Trình độ người nhận là ai?). Không để AI tự đoán.</li>
          <li><strong className="font-bold">R - Role (Đóng vai):</strong> Xác định chuyên môn của AI. Gán cho AI một vai trò (Giảng viên, Chuyên gia, Art Director) sẽ thay đổi toàn bộ văn phong và bộ từ vựng mà mô hình sử dụng, giúp câu trả lời chuyên nghiệp hơn.</li>
          <li><strong className="font-bold">E - Explicit Instructions (Chỉ dẫn rõ ràng):</strong> Phân chia một yêu cầu lớn thành các bước nhỏ (Step-by-step) để AI không bị quá tải ngữ nghĩa và bỏ sót ý.</li>
          <li><strong className="font-bold">A - Audience (Đối tượng):</strong> Xác định rõ "Ai sẽ đọc cái này?". Sinh viên năm nhất cần văn phong khác với một bản báo cáo nộp cho Giảng viên.</li>
          <li><strong className="font-bold">T - Tone & Format (Giọng điệu & Định dạng):</strong> Ép buộc định dạng đầu ra (Bảng biểu, Gạch đầu dòng, Code block, JSON) và quy định giọng điệu (Hài hước, Trang trọng, Khách quan) để tiết kiệm thời gian biên tập lại.</li>
          <li><strong className="font-bold">E - Example (Cung cấp ví dụ - Few-shot):</strong> Nếu yêu cầu một định dạng lạ, hãy mớm trước cho AI một ví dụ mẫu. Điều này giảm thiểu tỷ lệ sai lệch (hallucination) xuống mức thấp nhất.</li>
        </ul>
        <p>Sử dụng AI không phải là "hỏi - đáp" đơn thuần, mà là kỹ năng "lập trình bằng ngôn ngữ tự nhiên". Việc tinh chỉnh prompt chính là chìa khóa để khai thác tối đa sức mạnh của LLMs trong kỷ nguyên số.</p>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Giao tiếp & Hợp tác số',
    desc: 'Minh chứng việc sử dụng công cụ quản lý dự án nhóm và phối hợp trực tuyến.',
    icon: <Map className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
    link: '/25023889_Bài 4.pdf',
    goal: 'Sử dụng thành thạo các ứng dụng, phần mềm trong làm việc nhóm để điều phối và quản lý công việc.',
    process: 'Xây dựng một không gian làm việc số (như Notion, Trello), thiết lập Kanban board để theo dõi tiến độ, và sử dụng các công cụ giao tiếp như Slack/Teams để giữ liên lạc liên tục giữa các thành viên.',
    resultImg: '',
    resultText: (
      <div className="text-sm font-sans space-y-4 font-light leading-relaxed">
        <p>Qua quá trình thực hiện bài tập và dự án nhóm, em nhận thấy năng lực quản lý cá nhân và kỹ năng sử dụng công cụ số là yếu tố then chốt để làm việc hiệu quả trong môi trường hiện đại. Việc áp dụng công nghệ không chỉ giúp em hoàn thành tốt phần việc của mình mà còn đóng góp tích cực vào thành công chung của cả tập thể.</p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Sáng tạo nội dung số',
    desc: 'Trưng bày sản phẩm nội dung số (hình ảnh/bài viết) được AI hỗ trợ sáng tạo.',
    icon: <GraduationCap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80',
    link: '/25023889_b%C3%A0i%205.2.pdf',
    goal: 'Tích hợp các tài nguyên, công cụ để tự tay sản xuất nội dung số chuyên nghiệp.',
    process: 'Lên ý tưởng kịch bản bằng tư duy thiết kế, sử dụng công cụ tạo ảnh AI (Midjourney/DALL-E) hoặc thiết kế đồ họa (Canva/Figma), sau đó biên tập và hoàn thiện sản phẩm.',
    resultImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    resultText: (
      <div className="text-sm font-sans space-y-2 font-light leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>AI là công cụ khuếch đại năng lực, không phải sự thay thế:</strong> Người sử dụng càng có nền tảng kiến thức và kỹ năng tốt, AI càng phát huy hiệu quả cao hơn</li>
          <li><strong>Kỹ năng viết prompt là kỹ năng mới quan trọng:</strong> Khả năng diễn đạt yêu cầu rõ ràng, cụ thể cho AI quyết định phần lớn chất lượng đầu ra</li>
          <li><strong>Workflow kết hợp nhiều AI hiệu quả hơn dùng một công cụ:</strong> Mỗi AI có điểm mạnh riêng, việc phối hợp chúng tạo ra kết quả vượt trội so với chỉ dùng một</li>
          <li><strong>Tư duy phản biện vẫn không thể thiếu:</strong> Luôn cần đánh giá, lọc lựa và chỉnh sửa output của AI thay vì chấp nhận nguyên vẹn</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: 'An toàn và liêm chính học thuật',
    desc: 'Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên nghiên cứu.',
    icon: <ShieldCheck className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
    link: '/25023889_Bài 6.pdf',
    goal: 'Xây dựng ý thức về an toàn thông tin, bảo vệ quyền riêng tư và phát huy tính toàn vẹn trong học thuật.',
    process: 'Nghiên cứu các quy chuẩn đạo đức về sử dụng nguồn từ AI, thiết lập các quy tắc trích dẫn và bảo mật tài khoản mạng cá nhân bằng xác thực hai yếu tố.',
    resultImg: '',
    resultText: (
      <div className="text-sm font-sans space-y-4 font-light leading-relaxed">
        <p>Bài tập này đã mang lại cơ hội để em không chỉ thực hành sử dụng AI mà còn phản tư sâu về vai trò của công nghệ trong quá trình học tập. Kết luận quan trọng nhất: AI là công cụ mạnh mẽ và trung lập – giá trị hay hại của nó phụ thuộc hoàn toàn vào cách người sử dụng lựa chọn tương tác với nó.</p>
        <p>Trong bối cảnh ngành Thiết kế Công nghiệp và Đồ họa đang thay đổi nhanh chóng dưới tác động của AI generative, việc học cách sử dụng AI có trách nhiệm không phải là lựa chọn – đó là kỹ năng bắt buộc của thế hệ designer tương lai.</p>
      </div>
    ),
  }
];

export type AssignmentType = typeof ASSIGNMENTS[0];

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<AssignmentType | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedAssignment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAssignment]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    // Calculate position with a slight top offset for breathing room
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 60;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start: number | null = null;

    const ease = (t: number, b: number, c: number, d: number) => {
      // Quartic easing in/out
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t + b;
      t -= 2;
      return (-c / 2) * (t * t * t * t - 2) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen selection:bg-[var(--color-brand-text)] selection:text-[var(--color-brand-bg)] pb-24 overflow-x-hidden relative">
      
      {/* SCROLL PROGRESS BAR (Moved into nav to prevent visual clipping) */}
      
      {/* FIXED NAVIGATION */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 print:hidden ${isScrolled ? 'bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] shadow-[0_4px_20px_rgba(33,40,66,0.1)] py-4' : 'bg-transparent text-[var(--color-brand-bg)] py-6 md:py-8'}`}>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left z-[-1]"
          style={{ scaleX, backgroundColor: isScrolled ? 'var(--color-brand-bg)' : 'var(--color-brand-text)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <div className="font-sans text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 md:gap-2">
            <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
            Anh Tú
          </div>
          <div className="flex gap-3 md:gap-8 font-sans text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-80">
            <button onClick={() => scrollTo('about')} className="hover:opacity-100 transition-opacity tracking-widest uppercase cursor-pointer outline-none">About</button>
            <button onClick={() => scrollTo('projects')} className="hover:opacity-100 transition-opacity tracking-widest uppercase cursor-pointer outline-none">Projects</button>
            <button onClick={() => scrollTo('highlights')} className="hover:opacity-100 transition-opacity tracking-widest uppercase cursor-pointer outline-none">Summary</button>
          </div>
        </div>
      </nav>
      
      {/* HEADER / HERO SECTION (PAGE 1) */}
      <header className="relative w-full h-screen bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-soft-light">
          <img 
             src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1500&auto=format&fit=crop" 
             alt="crumpled paper filter" 
             className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Huge PORTFOLIO Text */}
        <div className="absolute top-[18%] md:top-[12%] w-full flex justify-center z-10 px-4">
           <h1 className="font-display font-bold text-[22vw] md:text-[18vw] leading-none tracking-normal text-center whitespace-nowrap">
             PORTFOLIO
           </h1>
        </div>

        {/* Center Container for Image and Names */}
        <div className="relative z-20 flex items-center justify-center w-full h-full mt-[12vh]">
          
          {/* Left Name */}
          <div className="absolute left-4 md:left-[8%] lg:left-[12%] z-30 font-serif italic text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl pointer-events-none md:pointer-events-auto text-[#EBB439]">
            Anh
          </div>

          <div className="font-display font-bold text-[3.5rem] md:text-[6rem] lg:text-[8rem] opacity-20 italic absolute z-10 w-full text-center tracking-tight pointer-events-none">
            2026
          </div>

          {/* Portrait Image */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-20 w-[55vw] sm:w-[45vw] md:w-[35vw] lg:w-[400px] h-[50vh] md:h-[65vh] rounded-[200px] overflow-hidden shadow-2xl border border-white/10 shrink-0"
          >
             <img 
               src={portraitImg} 
               alt="Lê Đức Anh Tú" 
               className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
             />
          </motion.div>

          {/* Right Name */}
          <div className="absolute right-4 md:right-[8%] lg:right-[12%] z-30 font-serif italic text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl pointer-events-none md:pointer-events-auto text-[#EBB439]">
            Tú
          </div>

        </div>

        {/* Small Text Bottom Left */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 flex flex-col font-sans text-[10px] md:text-xs opacity-60 tracking-wider uppercase gap-1">
           <span>MSV: 25023889</span>
           <span className="max-w-[200px] md:max-w-none">Trường Đại học Công nghệ - ĐHQGHN</span>
        </div>
      </header>

      {/* CONTENT SECTIONS */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* PAGE 1.5: TABLE OF CONTENTS */}
        <section id="toc" className="py-24 md:py-32 min-h-[50vh] flex flex-col justify-center border-b border-[var(--color-brand-border)]">
           <div className="mb-16 md:mb-24 text-center">
             <h2 className="font-display font-bold text-[3rem] md:text-[4.5rem] tracking-tight text-[var(--color-brand-text)] flex items-center justify-center gap-4">
               <span className="opacity-20 hidden md:block">"</span>
               TABLE <span className="bg-[#EBB439] px-4 rounded-xl text-white italic rotate-2 mx-1 shadow-md">OF</span> CONTENT
               <span className="text-[#EBB439]">.</span>
               <span className="opacity-20 hidden md:block">"</span>
             </h2>
           </div>
           
           <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              
              {/* About Me */}
              <motion.button onClick={() => scrollTo('about')} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full max-w-[200px] relative aspect-square rounded-[30px] overflow-hidden group cursor-pointer shadow-[0_8px_0_0_rgba(33,40,66,0.1)] active:shadow-[0_0px_0_0_rgba(33,40,66,0.1)] active:translate-y-[8px] transition-all bg-[#EBB439] md:hover:-translate-y-2">
                 <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 p-6">
                   <div className="flex-1 w-full flex items-center justify-center">
                      <User className="w-16 h-16 md:w-20 md:h-20 text-[var(--color-brand-text)] opacity-90 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                   </div>
                 </div>
                 <div className="absolute bottom-0 w-full bg-[var(--color-brand-bg)] py-3 text-center border-t-2 border-[var(--color-brand-border)]">
                   <div className="font-sans font-black text-[10px] md:text-[11px] tracking-widest text-[var(--color-brand-text)] uppercase">About Me</div>
                 </div>
              </motion.button>

              {/* Projects / The Case */}
              <motion.button onClick={() => scrollTo('projects')} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="w-full max-w-[200px] relative aspect-square rounded-[30px] overflow-hidden group cursor-pointer shadow-[0_8px_0_0_rgba(33,40,66,0.1)] active:shadow-[0_0px_0_0_rgba(33,40,66,0.1)] active:translate-y-[8px] transition-all bg-[#EBB439] md:hover:-translate-y-2">
                 <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 p-6">
                   <div className="flex-1 w-full flex items-center justify-center">
                      <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-[var(--color-brand-text)] opacity-90 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                   </div>
                 </div>
                 <div className="absolute bottom-0 w-full bg-[var(--color-brand-bg)] py-3 text-center border-t-2 border-[var(--color-brand-border)]">
                   <div className="font-sans font-black text-[10px] md:text-[11px] tracking-widest text-[var(--color-brand-text)] uppercase">The Case</div>
                 </div>
              </motion.button>

              {/* Highlights */}
              <motion.button onClick={() => scrollTo('highlights')} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="w-full max-w-[200px] relative aspect-square rounded-[30px] overflow-hidden group cursor-pointer shadow-[0_8px_0_0_rgba(33,40,66,0.1)] active:shadow-[0_0px_0_0_rgba(33,40,66,0.1)] active:translate-y-[8px] transition-all bg-[#EBB439] md:hover:-translate-y-2">
                 <div className="absolute inset-0 flex flex-col items-center justify-center pb-8 p-6">
                   <div className="flex-1 w-full flex items-center justify-center">
                      <Star className="w-16 h-16 md:w-20 md:h-20 text-[var(--color-brand-text)] opacity-90 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                   </div>
                 </div>
                 <div className="absolute bottom-0 w-full bg-[var(--color-brand-bg)] py-3 text-center border-t-2 border-[var(--color-brand-border)]">
                   <div className="font-sans font-black text-[10px] md:text-[11px] tracking-widest text-[var(--color-brand-text)] uppercase">Summary</div>
                 </div>
              </motion.button>

           </div>
        </section>

        {/* PAGE 2: ABOUT / GIỚI THIỆU */}
        <section id="about" className="min-h-screen py-32 flex items-center justify-center">
           <div className="w-full max-w-4xl mx-auto">
             
             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }}
               className="w-full bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden"
             >
                <div className="relative z-10 w-full text-center flex flex-col items-center">
                  <h2 className="font-display font-bold text-[4.5rem] md:text-[7rem] mb-6 leading-[0.8] tracking-tight text-[var(--color-brand-text)]">
                    ABOUT ME
                  </h2>
                  <h3 className="font-sans font-bold text-[10px] tracking-widest uppercase mb-8 opacity-50 border-b border-[var(--color-brand-border)] pb-4 inline-block">
                    Giới thiệu bản thân
                  </h3>
                  
                  <div className="space-y-6 font-sans text-sm md:text-base leading-loose opacity-80 max-w-2xl mx-auto">
                    <div className="mb-8 p-8 md:px-16 md:py-12 border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[2rem] text-center relative overflow-hidden group hover:border-white/30 hover:bg-white/10 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.15)] max-w-fit mx-auto w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <p className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[var(--color-brand-text)] mb-3 tracking-tight drop-shadow-lg relative z-10 whitespace-nowrap">Lê Đức Anh Tú</p>
                      <p className="font-mono text-sm md:text-base opacity-90 tracking-[0.3em] uppercase mt-4 relative z-10 font-medium">MSV: 25023889</p>
                    </div>
                    
                    <p>
                      Chào mừng thầy/cô đến với <strong>Portfolio</strong> kỹ thuật số của em. Đây là Portfolio ghi lại hành trình học tập và ứng dụng thực tiễn từ môn học <strong>"Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo"</strong>.
                    </p>
                    <p>
                      Em có niềm đam mê mạnh mẽ với việc tích hợp công nghệ vào quy trình làm việc hằng ngày. Quá trình thực hiện dự án này giúp em định hình rõ hơn phong cách tư duy thiết kế, cách khai thác dữ liệu học thuật, và đặc biệt là làm chủ các mô hình AI một cách có trách nhiệm và hệ thống.
                    </p>
                    <p className="font-serif italic text-lg pt-4 opacity-70">
                      "Thể hiện các kỹ năng số đã học và lưu trữ sản phẩm cá nhân để dễ dàng nghiên cứu, chia sẻ."
                    </p>
                  </div>
                </div>

                {/* Decorative Initial Letter Background */}
                <div className="absolute -right-8 -bottom-16 opacity-[0.03] font-display text-[20rem] leading-none pointer-events-none select-none text-[var(--color-brand-text)]">
                  M
                </div>
             </motion.div>

           </div>
        </section>

        {/* PAGE 3: PROJECTS / THE CASE / DỰ ÁN */}
        <section id="projects" className="py-24 min-h-screen">
          <div className="mb-20 text-center flex flex-col items-center text-[var(--color-brand-text)]">
              <h2 className="font-display font-bold text-5xl md:text-7xl">THE CASE</h2>
              <div className="w-24 h-px bg-[var(--color-brand-border)] mt-6"></div>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase mt-6 opacity-60">Tổng hợp bài tập & Dự án hoàn thành</p>
          </div>

          {/* PROJECTS GRID (6 Assignments) */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              show: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ASSIGNMENTS.map((item, index) => (
               <motion.div 
                 key={item.id}
                 onClick={() => setSelectedAssignment(item)}
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                 }}
                 className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] group flex flex-col overflow-hidden hover:bg-[var(--color-brand-card-hover)] transition-colors duration-300 cursor-pointer"
               >
                  <div className="h-48 overflow-hidden relative p-4 pb-0 opacity-80 group-hover:opacity-100 transition-opacity">
                     <div className="absolute inset-4 bottom-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors"></div>
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                     
                     {/* Badge */}
                     <div className="absolute top-6 left-6 z-20 bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] border border-[var(--color-brand-border)] px-3 py-1 font-sans text-[10px] tracking-widest uppercase font-bold">
                        Bài {item.id}
                     </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative bg-[var(--color-brand-card)] group-hover:bg-[var(--color-brand-card-hover)] transition-colors duration-300 z-10 -mt-1 h-full"> 
                     <div className="flex items-center gap-3 mb-4 opacity-50 border border-[var(--color-brand-text)] w-10 h-10 rounded-full justify-center">
                       {item.icon}
                     </div>
                     <h3 className="font-serif italic font-light text-2xl mb-3 leading-tight">
                       {item.title}
                     </h3>
                     <p className="font-sans text-sm opacity-70 flex-grow mb-6">
                       {item.desc}
                     </p>
                     
                     <button onClick={(e) => { e.stopPropagation(); setSelectedAssignment(item); }} className="flex items-center gap-2 font-sans text-[10px] tracking-widest font-bold uppercase border-b border-[var(--color-brand-border)] hover:border-[var(--color-brand-text)] w-max pb-1 mt-auto transition-all">
                       <ExternalLink className="w-3 h-3" /> Chi Tiết Bài Tập
                     </button>
                  </div>
               </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PAGE 4: SUMMARY / TỔNG KẾT */}
        <section id="highlights" className="py-24 min-h-[80vh] flex items-center">
             
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8 }}
               className="w-full bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] p-10 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center gap-16 text-[var(--color-brand-text)] shadow-sm"
             >
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <h2 className="font-display font-bold text-5xl md:text-7xl">SUMMARY</h2>
                  <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest opacity-50 border-b border-[var(--color-brand-border)] pb-4 inline-block">Trang Tổng Kết</h3>
                  
                  <div className="space-y-4 font-sans text-sm leading-relaxed max-w-2xl opacity-80 pt-4 mx-auto md:mx-0 text-left">
                    <p>
                      Dự án Portfolio này không chỉ là bản tổng hợp các bài tập, mà là minh chứng cho sự trưởng thành về tư duy tiếp nhận công nghệ. 
                    </p>
                    <p>
                      <strong>Kiến thức quan trọng nhất:</strong> Hiểu được cách làm việc cộng sinh với Trí tuệ nhân tạo (AI) một cách có trách nhiệm và hiệu quả, đặc biệt trong việc xây dựng các Prompt chất lượng.
                    </p>
                    <p>
                      <strong>Thách thức đã vượt qua:</strong> Việc hệ thống hóa khối lượng lớn tài nguyên số và thiết kế chúng thành một câu chuyện mạch lạc, có tính thẩm mỹ cao.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                   <a href="/portfolio 2026.pdf" download className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] shadow-sm flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:bg-[var(--color-brand-card)] transition-colors">
                      <Download className="w-8 h-8 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-sans text-[10px] font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        Tải File PDF Báo Cáo
                      </span>
                      
                      {/* Decorative spinning ring */}
                      <div className="absolute inset-2 md:inset-4 rounded-full border border-dashed border-[var(--color-brand-border)] animate-[spin_30s_linear_infinite] opacity-50" />
                   </a>
                </div>
             </motion.div>
        </section>
        
        {/* CONNECT SECTION */}
        <section id="connect" className="w-full relative py-24 md:py-32 px-6 md:px-12 border-t border-[var(--color-brand-border)] overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="font-display font-bold text-5xl md:text-8xl">CONNECT</h2>
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-b border-[var(--color-brand-border)] pb-4 inline-block">Contact & Socials</h3>
            </div>
            
            <div className="flex-1 flex flex-col items-center md:items-end gap-2 w-full font-sans text-sm md:text-base z-10 w-full max-w-md">
              
              <a href="https://instagram.com/letu.0744" target="_blank" rel="noreferrer" className="w-full flex justify-between items-center group py-6 md:py-8 border-b border-[var(--color-brand-border)]/20 hover:border-[var(--color-brand-text)] border-dashed transition-all duration-500">
                <span className="italic font-serif font-light text-2xl md:text-4xl group-hover:pl-4 md:group-hover:pl-8 transition-all duration-500">Instagram</span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 flex items-center gap-2 group-hover:opacity-100 transition-opacity">
                  @letu.0744 <ExternalLink className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="mailto:25023889@vnu.edu.vn" className="w-full flex justify-between items-center group py-6 md:py-8 border-b border-[var(--color-brand-border)]/20 hover:border-[var(--color-brand-text)] border-dashed transition-all duration-500">
                <span className="italic font-serif font-light text-2xl md:text-4xl group-hover:pl-4 md:group-hover:pl-8 transition-all duration-500">Mail</span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  25023889@vnu.edu.vn <ExternalLink className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute right-[-10vw] bottom-[-20vw] text-[40vw] font-serif italic font-thin opacity-[0.02] pointer-events-none leading-none select-none">
            C
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="print:hidden px-6 md:px-12 py-8 border-t border-[var(--color-brand-border)] flex flex-col md:flex-row justify-center items-center text-[var(--color-brand-text)] gap-4 pb-12 md:pb-8 bg-[var(--color-brand-bg)]">
         <p className="font-sans text-[10px] font-bold tracking-widest uppercase opacity-60 text-center">© 2026 Digital Portfolio</p>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="print:hidden fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] p-4 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] rounded-full shadow-2xl cursor-pointer outline-none flex items-center justify-center group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ASSIGNMENT DETAILED MODAL */}
      <AnimatePresence>
        {selectedAssignment && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[var(--color-brand-text)]/30 backdrop-blur-sm overflow-y-auto p-4 md:p-8 flex justify-center items-start md:items-center"
            onClick={() => setSelectedAssignment(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] rounded-3xl shadow-2xl relative flex flex-col my-auto border border-[var(--color-brand-border)] overflow-hidden"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedAssignment(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] hover:bg-[var(--color-brand-text)] hover:text-[var(--color-brand-bg)] transition-colors z-50 flex items-center justify-center group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Modal Content */}
              <div className="p-6 pt-20 md:p-16 flex flex-col gap-12">
                {/* Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 opacity-50">
                    <span className="font-sans text-[10px] tracking-widest uppercase font-bold border border-[var(--color-brand-border)] px-3 py-1">Bài {selectedAssignment.id}</span>
                    <div className="w-12 h-px bg-[var(--color-brand-border)]"></div>
                  </div>
                  <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight">
                    {selectedAssignment.title}
                  </h2>
                  <p className="font-sans text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed">
                    {selectedAssignment.desc}
                  </p>
                </div>

                {/* Cover Image */}
                <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-xl bg-[var(--color-brand-card)] border border-[var(--color-brand-border)]">
                  <img 
                    src={selectedAssignment.image} 
                    alt={selectedAssignment.title}
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  />
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                  <div className="space-y-6">
                    <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-b border-[var(--color-brand-border)] pb-4 inline-block">Mục Tiêu Bài Tập</h3>
                    <p className="font-serif italic text-xl leading-relaxed text-[var(--color-brand-text)]">
                      "{selectedAssignment.goal}"
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-b border-[var(--color-brand-border)] pb-4 inline-block">Quá Trình Thực Hiện</h3>
                    <p className="font-sans text-sm md:text-base opacity-80 leading-relaxed font-light">
                      {selectedAssignment.process}
                    </p>
                  </div>
                </div>

                {/* Optional Steps Content */}
                {selectedAssignment.steps && selectedAssignment.steps.length > 0 && (
                  <div className="space-y-12 mt-8">
                    <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-b border-[var(--color-brand-border)] pb-4 inline-block">Các Bước Thực Hiện</h3>
                    <div className="space-y-12">
                      {selectedAssignment.steps.map((step: any, idx: number) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] p-6 md:p-10">
                          <div className="flex-1 space-y-4">
                            <h4 className="font-sans font-bold text-lg">{step.title}</h4>
                            <p className="font-sans text-sm opacity-80 leading-relaxed font-light">{step.desc}</p>
                          </div>
                          {step.image && (
                            <div className="flex-1 w-full relative h-[30vh] md:h-[40vh] border border-[var(--color-brand-border)]">
                              <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Result/Product */}
                <div className="mt-8 space-y-6">
                  <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 border-b border-[var(--color-brand-border)] pb-4 inline-block">Sản Phẩm Cuối Cùng</h3>
                  
                  {selectedAssignment.resultImg && (
                    <div className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] p-2">
                      <img 
                        src={selectedAssignment.resultImg} 
                        alt="Kết quả bài tập"
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  )}

                  {selectedAssignment.resultText && (
                    <div className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] p-6 md:p-8">
                      {selectedAssignment.resultText}
                    </div>
                  )}
                  
                  <div className="flex justify-start">
                     <a href={selectedAssignment.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] font-sans text-xs tracking-widest font-bold uppercase hover:bg-opacity-80 transition-all group">
                       <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> Tải về / Xem trực tuyến
                     </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
