import { Component } from "react";

class Blog extends Component{
    render(){
        return(
            <section id="blog" className="blog">
  <div className="container">
    <div className="section-header">
      <h2>latest blog</h2>
    </div>
    <div className="blog-content">
      <div className="row">
        <div className="col-sm-4">
          <div className="single-blog">
            <div className="single-blog-img">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max500/149718418.jpg?k=dc913741a76839d7210dd5c0bea3b2efadc49abd359ee85da437e899a613d09a&o=" alt="blog image" />
              <div className="single-blog-img-overlay" />
            </div>
            <div className="single-blog-txt">
              <h2><a href="#">3 Smart and Simple Bisque Clay Hump Mold Techniques.</a></h2>
              <h3>By <a href="#">Robert Norby</a> / 15th Feb 2022</h3>
              <p>
              Making your own bisque hump or slump molds is probably the easiest and most accessible way to get into mold making in ceramics... 
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-blog">
            <div className="single-blog-img">
              <img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/202006151400213450-02263120008ni4xrp5960_R_550_412_R5.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg" alt="blog image" />
              <div className="single-blog-img-overlay" />
            </div>
            <div className="single-blog-txt">
              <h2><a href="#">A Great DIY Hack for Preserving an Essential Clay Tool.</a></h2>
              <h3>By <a href="#">Linda Arbuckle</a> / 18th Feb 2022</h3>
              <p>
              How many times have you ruined a perfectly good paintbrush by forgetting to clean it after waxing pots? If you are as forgetful as I am, you’ll want to pay attention to this post!...              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-blog">
            <div className="single-blog-img">
              <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/20/a5/19/hotel-yog.jpg" alt="blog image" />
              <div className="single-blog-img-overlay" />
            </div>
            <div className="single-blog-txt">
              <h2><a href="#">Screen Printing and Stenciling Underglaze Designs on Curvy Pots.</a></h2>
              <h3>By <a href="#">Meredith Host</a> / 10th Feb 2022</h3>
              <p>
              Today's video clip didn't quite fit onto Meredith Host's video because we ran out of space...              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*/.container*/}
</section>

        )
    }
}

export default Blog;