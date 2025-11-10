import React from "react";
import { Header } from "../common/Header";
import { BlogPost } from "./BlogPost";
import { Footer } from "../common/footer";

export function IndividualBlogPost(){
    return(
    <>
        <div>
            <Header />
        </div>
        <div class="blog">
            <BlogPost />
        </div>
        <div>
            <Footer />
        </div>
      </>
    )
}