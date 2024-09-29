
const Technologies = () => {
    return (
        <section id="technologies" className="py-16 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Công Nghệ Sử Dụng</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Python</h3>
                        <p>Ngôn ngữ chính cho xử lý hình ảnh và xây dựng mô hình Machine Learning.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">OpenCV</h3>
                        <p>Thư viện mã nguồn mở xử lý hình ảnh mạnh mẽ.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">TensorFlow</h3>
                        <p>Nền tảng Machine Learning để phát triển và huấn luyện mô hình.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">React</h3>
                        <p>Framework xây dựng giao diện người dùng dễ sử dụng và tương tác.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
