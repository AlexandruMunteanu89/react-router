export default function HomePage(){


    return (
            <main>
                <div className="p-5 mb-4 bg-light rounded-3"
                 style={{
                    backgroundImage: "url('https://aktassociates.com/blog/wp-content/uploads/2019/10/private-limited-company.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "500px",
                    color: "white"
                    }}>
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom hero section</h1>
                        <p className="fs-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem doloremque corrupti quod dolores saepe placeat, possimus fugiat optio sunt, aut, quisquam vitae? Doloribus unde rerum laborum delectus incidunt? Eos, placeat!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti ipsum itaque sapiente porro vel, consectetur totam exercitationem eveniet magnam alias eius a facere dolorum vitae pariatur perspiciatis ipsa nam!
                        </p>
                        <button className="btn btn-warning btn-lg" type="button">
                            Join us
                        </button>
                    </div>
                </div>
                
            </main>
    )
}