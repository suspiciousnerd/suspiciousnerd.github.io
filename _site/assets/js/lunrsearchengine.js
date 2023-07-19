
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About This Blog",
    "body": "Under Construction. Questions or Feedback?: Contact Me"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                                                                                                                Second Post. Just testing some test in this little boxy woxy                              :               Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who. . . :                                                                                                                                                                       Mr. T                                16 Jul 2023                                                                                                                                                                                                                                                                                                                                                                                         First Post                              :               Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who. . . :                                                                                                                                                                       Mr. T                                16 Jul 2023                                                                                                                      All Posts:                                                                                                                                                 Third Post. Still Testing              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                                                                                                                                                                 Third Post. Still Testing              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                                                                                                                                                                 Third Post. Still Testing              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                                                                                                                                                                 Third Post. Still Testing              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                                                                                                                                                                 Third Post. Still Testing              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                                                                                                                                                                 Second Post. Just testing some test in this little boxy woxy              :       Lorem Ipsum “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…” “There is no one who loves pain itself, who seeks after it and wants. . . :                                                                               Mr. T                16 Jul 2023                                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Posts:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/third-post/",
    "title": "Third Post. Still Testing",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/third-post-copy/",
    "title": "Third Post. Still Testing",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/third-post-copy-4/",
    "title": "Third Post. Still Testing",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/third-post-copy-3/",
    "title": "Third Post. Still Testing",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/third-post-copy-2/",
    "title": "Third Post. Still Testing",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/second-post/",
    "title": "Second Post. Just testing some test in this little boxy woxy",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor.  "
    }, {
    "id": 12,
    "url": "http://localhost:4000/first-post/",
    "title": "First Post",
    "body": "2023/07/16 - Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”“There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, dui et consequat lobortis, augue dui auctor sapien, a rutrum ex metus hendrerit neque. Maecenas nec consectetur arcu. Mauris purus massa, viverra ac elementum id, vulputate in metus. Ut nec felis et est tincidunt dapibus vel vel massa. Quisque ultricies finibus metus, faucibus lobortis risus facilisis at. In nec elit sagittis, commodo nisl at, gravida mauris. Suspendisse vel semper libero. Integer semper nulla nisl, nec sodales sapien tempus a. Vivamus suscipit nibh ipsum, imperdiet accumsan nulla mattis in. Curabitur laoreet odio ullamcorper nunc commodo pulvinar eu quis magna. Sed eget justo vel erat cursus maximus. Aenean vestibulum scelerisque lacus, eu facilisis ipsum congue vel. Nunc dignissim in nibh at porttitor. Morbi et porttitor ex. Curabitur id eleifend elit. Sed eu luctus enim. Integer vitae imperdiet orci. Curabitur lacinia consectetur efficitur. Vestibulum et nisi eget nulla hendrerit aliquam. Praesent et gravida leo, ac faucibus ante. Aliquam congue, massa a suscipit lobortis, leo massa ornare tellus, ut efficitur felis tortor nec felis. Sed arcu nisl, tristique nec tincidunt vel, tempus sit amet neque. Nam fermentum arcu sed leo maximus volutpat. Pellentesque faucibus dolor non ante pretium maximus. Nulla luctus tempor malesuada. In hac habitasse platea dictumst. Donec nulla eros, egestas convallis neque et, molestie sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla diam. Nam eu turpis laoreet, auctor purus ac, tincidunt nibh. Aenean lobortis sem a urna congue vulputate. Aenean vel pulvinar dolor, et volutpat arcu. Curabitur at justo tincidunt, mattis nibh sed, tempus tellus. Vestibulum efficitur rutrum libero, quis aliquam libero vehicula ac. Quisque eu elit et urna aliquet vehicula ut pellentesque augue. Praesent gravida quis sem eu euismod. Etiam ex massa, ullamcorper eleifend nisl a, pharetra sagittis odio. Aenean laoreet fringilla libero, id semper elit lacinia ut. Vestibulum vitae ipsum nibh. Vestibulum et venenatis tellus. Duis tincidunt, ante eu auctor feugiat, turpis lectus egestas erat, nec tincidunt lacus risus non est. Nam et sagittis urna, eu pellentesque dui. Fusce tincidunt, enim at condimentum consequat, turpis mi sodales est, non luctus sem elit sed arcu. Nulla eu arcu dapibus, tempor massa id, commodo arcu. Phasellus vitae est rhoncus, volutpat nulla vel, viverra ligula. Nam ut odio placerat, iaculis purus in, viverra dolor. Mauris arcu ipsum, faucibus ultrices tellus vitae, porttitor vestibulum sem. Morbi laoreet vitae eros aliquet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel molestie elit, condimentum luctus urna. Nam quis varius mi, id lobortis massa. Curabitur leo est, dictum nec purus ac, vulputate suscipit odio. Fusce imperdiet ut arcu a venenatis. Sed lorem ligula, molestie porttitor felis a, mollis condimentum sem. Morbi sodales iaculis massa non ullamcorper. Integer eget enim eget diam sodales sollicitudin sed sit amet est. Phasellus non arcu mattis nunc sollicitudin venenatis. Vestibulum a condimentum lectus. Sed ornare nisl at auctor vehicula. Aenean malesuada facilisis turpis, vitae lobortis est hendrerit ac. Fusce eget metus vel justo bibendum luctus. Aliquam consectetur volutpat tellus, eu blandit dolor suscipit non. Nam elit risus, porttitor sit amet tempus at, mattis in felis. Nulla eu elit quis diam egestas congue. Mauris posuere sem ut risus varius, id molestie turpis tempor. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});