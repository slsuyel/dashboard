const PuthiBoi = () => {

    const book_categories = [
        "একাডেমিক বই",
        "সৃজনশীল বই",
        "নার্সারী",
        "মাল্টিমিডিয়া",
        "শিশুতোষ",
        "উপন্যাস",
        "শিক্ষা বিষয়ক",
        "শিল্প ও সংস্কৃতি",
        "কেজি শ্রেণী",
        "ঐতিহ্য",
        "শিশু বিকাশ",
        "একাডেমিক বই"
    ]

    return (
        <div>
            <div className='table-responsive'>
                <table className="table table-striped">
                    <thead>
                        <tr className='text-start'>
                            <th>#</th>
                            <th>Selected Category Name :পুথিপ্রকাশের বই </th>
                        </tr>
                    </thead>

                    <tbody>
                        {book_categories.map((ct, index) => (
                            <tr key={index} className='text-start'>
                                <td>{index + 1}</td>
                                <td>{ct}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PuthiBoi;