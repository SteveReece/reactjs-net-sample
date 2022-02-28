namespace sample.ui.Models
{
    public static class Entries
    {
        private static readonly IList<BlogEntry> _entries = new List<BlogEntry>
        {
            new BlogEntry { id = "blog-one",
                title = "Blog One",
                document = "<div>" +
                "<p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. <strong>Maecenas nec lobortis</strong> nulla, nec placerat leo. Nunc et libero sapien. Fusce mi enim, placerat at nulla eu, mattis commodo lorem. Duis hendrerit diam eros, quis bibendum justo sagittis sit amet. Cras id ex nisi. Aenean sed metus diam. Quisque eu justo rutrum, imperdiet augue at, accumsan libero.</p>" +
                "<pre><code>const history=useHistor()</code></pre>"+
                "<pre><code>history.push('/blog')</code></pre>"+
                "<p>Aliquam dignissim, augue ullamcorper euismod elementum, quam nulla interdum nisi, quis tincidunt risus lectus eget sapien. Sed porta venenatis imperdiet. Vivamus blandit iaculis tempus. Proin sed orci et velit aliquet consequat vitae ut odio. Etiam sit amet molestie odio. Nam nec lacus ac justo hendrerit facilisis. Vivamus et auctor odio. Etiam egestas quis nisl ut vulputate. Sed non vestibulum felis, ac congue leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>"+
                "</div>",
                fragment = "Lorem ipsum dolor sit amet, <em>consectetur adipiscing",
                publishedAt = DateTime.UtcNow
            },
            new BlogEntry { id = "blog-two",
                title = "Blog Two",
                document = "<div>" +
                "<p>Donec at semper velit. Cras dignissim lectus metus, et mattis tortor vehicula quis. Integer ut dolor elit. Aliquam erat volutpat. Cras cursus lorem vel lacus scelerisque, ac auctor massa volutpat. Aliquam in urna ex. Aenean sem eros, vestibulum eget ipsum vitae, rhoncus placerat nunc. Quisque tellus purus, tincidunt ut neque sit amet, luctus mollis libero. Proin accumsan arcu metus, tincidunt pretium nisl ultrices at. Nulla facilisi.</p>" +
                "<pre><code>const history=useHistor()</code></pre>"+
                "<pre><code>history.push('/blog')</code></pre>"+
                "<p>Curabitur in augue risus. Nunc eget ante semper, pulvinar purus eu, laoreet eros. Morbi molestie laoreet dignissim. Morbi ac magna auctor, molestie eros at, mattis urna. Nam blandit dui id metus tincidunt pharetra. Pellentesque eget tincidunt arcu. Nunc at risus vulputate, rhoncus urna in, facilisis ex. Mauris ac mi enim. Suspendisse vitae lorem sagittis, congue sem vitae, euismod odio. Integer et pulvinar enim, ac tincidunt tortor. Quisque eu placerat sapien. Sed vel porta dolor. Ut pharetra sed nisl consequat consequat.</p>"+
                "</div>",
                fragment = "Donec at semper velit. Cras dignissim lectus metus, et mattis tortor vehicula quis. Integer",
                publishedAt = DateTime.UtcNow
            },
        };

        public static BlogEntry? GetBlog(string id)
        {
            return _entries.FirstOrDefault(entry => entry.id == id);
        }

        public static IList<BlogTitle> GetTitles()
        {
            return _entries.Select(e => new BlogTitle
            {
                title = e.title,
                publishedAt = e.publishedAt,
                fragment = e.fragment,
                id = e.id
            }).ToList();
        }
    }

}
