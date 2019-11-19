let mongoose = require('mongoose');

mongoose.Promise = global.Promise;


let blogSchema = mongoose.Schema({
	id: { type: String },
	title : { type: String },
	content: { type: String },
	author: { type: String },
	publishDate : { type: String }
	
});
let Blog = mongoose.model('Blog', blogSchema);






let Bloglist = {
    get: function () {
        return Blog.find()
            .then(blog => {
                return blog;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    post: function (newBlog) {
        return Blog.create(newBlog)
            .then(blog => {
                return blog;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    getblog: function (author) {
        return Blog.findOne({ author: author })
            .then(blog => {
                return blog;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    put: function (id, uBlog) {
        return Blog.findOneAndUpdate({ id: id }, uBlog, { new: true })
            .then(blog => {
                return blog;
            })
            .catch(error => {
                throw Error(error);
            });
    },
	DELETE: function(id){
		return Blog.findOneAndRemove({id:id})
				.then( blog => {
					return blog;
				})
				.catch( error => {
					throw Error(error);
				});
		
	},
};


module.exports = { Bloglist };


