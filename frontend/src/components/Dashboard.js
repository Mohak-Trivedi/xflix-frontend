import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../App";
import { Grid } from "@mui/material";
import VideoCard from "./VideoCard";
import GenreSection from "./GenreSection";
import Loading from "./Loading";
import Navbar from "./Navbar";
// import "./Dashboard.css";
import { Box } from "@mui/material";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchVideoData = async () => {
    setLoading(true);
    try {
      const URL = `${config.endpoint}/videos`;
      const res = await axios.get(URL);
      setVideos(res.data.videos);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const performSearch = async (searchKey) => {
    let searchURL = `${config.endpoint}/videos?title=${searchKey}`;
    if (searchKey.length === 0) {
      searchURL = `${config.endpoint}/videos`;
    }

    try {
      let searchedVids = await axios.get(searchURL);
      console.log(searchedVids);
      setVideos(searchedVids.data.videos);
      console.log(videos);
    } catch (err) {
      if (err.response.status === 404) {
        setVideos([]);
      }
    }
  };


  // On page load, fetch videos data from the API endpoint.
  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        performSearch={performSearch}
      >
        {/* TODO: CRIO_TASK_MODULE_PRODUCTS - Display search bar in the header for Products page */}
      </Navbar>

      <GenreSection
        uniqGenres={["All Genre", "Education", "Sports", "Comedy", "Lifestyle"]}
        uniqContentRating={["Any age group", "7+", "12+", "16+", "18+"]}
        updateProducts={setVideos}
        search={search}
      />

      {loading ? (
        <Loading />
      ) : (
        <Grid container rowSpacing={3} columnSpacing={1} pl={10} pr={10}>
          {videos.length === 0 ? (
            <Box>No search found :(</Box>
          ) : (
            videos.map((video) => (
              <Grid item xs={12} sm={6} md={3} key={video._id}>
                <VideoCard videoData={video} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </div>
  );
};

export default Dashboard;
