
const Goals = () => {
    return (
        <section id="goals" className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Mục Tiêu Dự Án</h2>
                <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
                    <li className="mb-3 text-lg">Cải thiện độ chính xác nhận diện gương mặt.</li>
                    <li className="mb-3 text-lg">Áp dụng Machine Learning và Deep Learning vào bài toán nhận diện.</li>
                    <li className="mb-3 text-lg">Phát triển hệ thống có thể hoạt động trên nhiều nền tảng (web, mobile).</li>
                </ul>
            </div>
        </section>
    );
};

export default Goals;
