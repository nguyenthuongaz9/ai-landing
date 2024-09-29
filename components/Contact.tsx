
const Contact = () => {
    return (
        <section id="contact" className="py-16 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Liên Hệ</h2>
                <form className="max-w-lg mx-auto">
                    <input className="w-full p-3 mb-4 border rounded" type="text" placeholder="Tên của bạn" required />
                    <input className="w-full p-3 mb-4 border rounded" type="email" placeholder="Email" required />
                    <textarea className="w-full p-3 mb-4 border rounded" placeholder="Tin nhắn của bạn" rows={4} required></textarea>
                    <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Gửi</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
