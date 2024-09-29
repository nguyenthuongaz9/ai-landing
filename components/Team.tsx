
const Team = () => {
    return (
        <section id="team" className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6"></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="team-member p-6 bg-white shadow-lg rounded-lg">
                        <img className="w-24 h-24 rounded-full mx-auto mb-4" src="/images/member1.jpg" alt="Nguyễn Văn A" />
                        <h3 className="text-xl font-semibold">Nguyễn Văn Thường</h3>
                        <p>Trưởng nhóm nghiên cứu</p>
                    </div>
                    <div className="team-member p-6 bg-white shadow-lg rounded-lg">
                        <img className="w-24 h-24 rounded-full mx-auto mb-4" src="/images/member2.jpg" alt="Trần Thị B" />
                        <h3 className="text-xl font-semibold">Dương Văn Minh Vi</h3>
                        <p>Thành viên</p>
                    </div>
                    <div className="team-member p-6 bg-white shadow-lg rounded-lg">
                        <img className="w-24 h-24 rounded-full mx-auto mb-4" src="/images/member3.jpg" alt="Phạm Văn C" />
                        <h3 className="text-xl font-semibold">Phan Văn Lộc</h3>
                        <p>Thành viên</p>
                    </div>
                    <div className="team-member p-6 bg-white shadow-lg rounded-lg">
                        <img className="w-24 h-24 rounded-full mx-auto mb-4" src="/images/member3.jpg" alt="Phạm Văn C" />
                        <h3 className="text-xl font-semibold">Nguyễn Hoàng Việt Cường</h3>
                        <p>Thành viên</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
