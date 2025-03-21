import React, { useState, useEffect } from 'react';

function Api() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error("Error fetching albums:", error);
            }
        };
        fetchAlbums();
    }, []);

    return (
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {albums.map((user) => (
                    <div className="card col-md-3" key={user.id} style={{ margin: "20px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", textAlign: "center" }}>
                        <div className="d-flex align-items-center">
                            <img src={user.avatar_url} alt={user.login} style={{ width: "100px", borderRadius: "10%" }} />
                            <div className="ms-3 text-start">
                                <h5>{user.login}</h5>
                                <p className="role">GitHub User</p>
                            </div>
                        </div>
                        <div className="stats d-flex justify-content-around mt-2">
                            <div>
                                <p>Articles</p>
                                <h2>38</h2>
                            </div>
                            <div>
                                <p>Followers</p>
                                <h2>360</h2>
                            </div>
                            <div>
                                <p>Rating</p>
                                <h2>8.9</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Api;
