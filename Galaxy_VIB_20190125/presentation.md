
name: title_slide
layout: true
class: right, middle

background-image: url("images/galaxy_project_logo.png")
background-position: top
background-repeat: no-repeat
background-size: 60%

<div style="height:250px"></div>

<img src="images/galaxy_project_logo_square.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
layout: true
name: galaxy_slide

background-color: #2c3143

---
layout: true
name: galaxy_title_slide
class: right, middle

background-color: #2c3143

.center[![:scale 60%](images/galaxy_project_logo_white.png)]

<div style="height:150px"></div>

---
layout: true

<img src="images/galaxy_project_logo_square.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
template: title_slide

# Galaxy and the Galaxy Ecosystem

### Frederik Coppens

#### VIB Interest Group meeting - January 25th 2019

.italic[[www.galaxyproject.org](https://www.galaxyproject.org)]

---
template: galaxy_title_slide

## Galaxy ?

<p class=highlight style="font-size:150%;text-align:center;">
<img src="images/Twitter_Logo_Blue.png" height="70px" style="vertical-align:middle;"/>
#usegalaxy @galaxyproject
</p>

---
template: galaxy_slide
class: center, middle

.title[
## Galaxy is an .highlight[open], web-based platform for .highlight[accessible], .highlight[reproducible], and .highlight[transparent] computational biomedical research.
]

---
template: galaxy_slide
class: center, middle

.title[
## Galaxy is an .highlight[open], web-based platform for .highlight[accessible], .highlight[reproducible], and .highlight[transparent] computational biomedical research.
]

<img src="images/fair_white.png" height="20%" style="position:absolute;left:12%;bottom:5%;" />

???

![:scale 80%](images/fair_white.png)

---
template: galaxy_slide
class: center, middle

.title[
## Galaxy enables non-technical users to leverage bioinformatics tools .highlight[themselves] to analyse their data and share results
]
???

* workflow management system
* web-based user-interface
* inherent support for reproducible science
* facilitates sharing of data and results
* removes the need for users to compile and install tools
* allows non-technical users to leverage compute clusters

---

# Galaxy User Interface

![:scale 100%](images/galaxy_userinterface.png)

---

# Galaxy User Interface 19.01

![:scale 100%](images/galaxy_userinterface1901.png)

---
# Galaxy Workflow builder

![:scale 100%](images/galaxy_workflow.png)

---
template: galaxy_title_slide

## How to get Galaxy

---
template: galaxy_slide
class: center, middle

[![:scale 100%](images/galaxy_platforms.png)](https://galaxyproject.org/use/)

## [ galaxyproject.org/use ](https://galaxyproject.org/use/)

---

# Use Galaxy

* usegalaxy.*
  - usegalaxy.org
  - usegalaxy.au.org
  - usegalaxy.eu
* 108 Public servers
* Commercial clouds
* Academic clouds
* Containers or Virtual Machines

.banner[

## [ .highlight[galaxyproject.org/use] ](https://galaxyproject.org/use/)

]


---
# Get Galaxy

.center[[![:scale 50%](images/GitHub_Logo.png)](https://github.com/galaxyproject/galaxy)

.remark-code[git clone -b release_18.09 https://github.com/galaxyproject/galaxy.git]

.banner[

### Galaxy is .highlight[open source] and can be .highlight[freely downloaded] for a local installation

### [.highlight[galaxyproject.org/admin/get-galaxy]](https://galaxyproject.org/admin/get-galaxy/)
]]

---
class: center

# Galaxy in the cloud

![:scale 20%](images/openstack-logo512.png)
![:scale 30%](images/OpenNebulaLogo.png)
</br>
![:scale 30%](images/GlobusGenomics.png)
![:scale 30%](images/AWSLogo400.png)

.banner[
### [ launch.usegalaxy.org ](https://launch.usegalaxy.org)

### [ galaxyproject.org/cloud ](https://galaxyproject.org/cloud/)
]


???

http://aws.amazon.com/education
http://globus.org/
http://wiki.galaxyproject.org/Cloud
https://launch.usegalaxy.org/

---

## usegalaxy.be

![:scale 100%](images/usegalaxy_be.png)

---
template: galaxy_title_slide

## The Galaxy ecosystem

---
# The Galaxy ecosystem

![:scale 100%](images/ecosystem_blank.png)


???
![:scale 100%](images/galaxy_universe.png)

---
# The Galaxy ecosystem

![:scale 100%](images/ecosystem_galaxy.png)


---

.center[
[![:scale 50%](images/galaxy-toolshed-1000.png)](https://toolshed.g2.bx.psu.edu)

.banner[
### 6541 tools wrapped for Galaxy

### [toolshed.g2.bx.psu.edu](https://toolshed.g2.bx.psu.edu)

]

![:scale 30%](images/iuc-logo-trans.png)
<span style="width: 50px;display: inline-block"></span>
[![:scale 50%](images/planemo-logo.png)](https://planemo.readthedocs.org/)


]

---

# Tools & Containers

![:scale 100%](images/tools_for_galaxy.png)
.right[
Permanent caching [![:scale 20%](images/cpc-plain-small.png)](https://github.com/galaxyproject/cargo-port)
]
---

# Galaxy subcommunities

![:scale 100%](images/tools_eu.png)

---

# Reference data

* genome sequences
* annotations
* indices for common tools
* automation through [ephemeris](https://ephemeris.readthedocs.org/)

### 6TB reference data available on CVMFS

.banner[
### Coming soon : improved plant reference data
]

---

# Accessing compute resources

* Shared storage or streaming
* Configuration
  - Tool
  - User
  - Input data

.banner[
### .highlight[Virtual Galaxy Compute Nodes]

### [github.com/usegalaxy-eu/vgcn](https://github.com/usegalaxy-eu/vgcn)
]

.center[Powered by [![:scale 40%](images/pulsar_transparent.png)](https://pulsar.readthedocs.io)]

---
# ELIXIR Galaxy Community

.center[![:scale 80%](images/Galaxy_overview.png)]

.banner[
### Part of the European Open Science Cloud through EOSC-Life project
]

---

# Also for bioinformaticians

* API
  - RESTFUL
  - Python : [bioblend](https://bioblend.readthedocs.io/)
  - PHP : [blend4php](https://github.com/galaxyproject/blend4php)
  - CLI : [parsec](https://github.com/galaxy-iuc/parsec/)
* SDKs
  - [![:scale 20%](images/planemo-logo.png)](https://planemo.readthedocs.org/)
  - [Ephemeris](https://ephemeris.readthedocs.org/)

---
# The Galaxy ecosystem

![:scale 100%](images/galaxy_universe.png)


---
template: galaxy_title_slide

## Support

---

# Community

![:scale 100%](images/galaxyproject_contributors.png)

---

.center[![:scale 30%](images/galaxy-web-search.png)]

![:scale 100%](images/galaxyproject_search.png)

---
# Galaxy Community Hub
![:scale 100%](images/galaxyproject_intro.png)
---
# Gitter Chat
.center[![:scale 80%](images/galaxyproject_gitter.png)]
.banner[
### [gitter.im/galaxyproject/Lobby](https://gitter.im/galaxyproject/Lobby)
]
---
.center[![:scale 100%](images/galaxyproject_help.png)]

.banner[
### [help.galaxyproject.org](https://help.galaxyproject.org)
]
---
## Mailing lists

.center[![:scale 60%](images/galaxyproject_mailinglist.png)]

.banner[
### [galaxyproject.org/mailing-lists/](https://galaxyproject.org/mailing-lists/)
]

???

  - [galaxy-announce](http://announce.list.galaxyproject.org/)
  - [galaxy-training](http://galaxy-training-mailing-list-archive.35427.n7.nabble.com/)
  - [galaxy-dev](http://dev.list.galaxyproject.org/)
  - ...

---

.center[![:scale 20%](images/GalaxyNews.png)]

![:scale 100%](images/galaxyproject_news.png)

.banner[
### [galaxyproject.org/news/](https://galaxyproject.org/news/)
]
---

![:scale 100%](images/galaxyproject_blog.png)

.banner[
### [galaxyproject.org/blog/](https://galaxyproject.org/blog/)
]

---
## Galaxy Events

.center[![:scale 100%](images/galaxyproject_events.png)]

.banner[
### [galaxyproject.org/events/](https://galaxyproject.org/events/)
]

---
class: center

[![:scale 30%](images/GTNLogoTrans1000.png)](https://training.galaxyproject.org)
.center[![:scale 70%](images/galaxy_training_zoom.png)]

.banner[
### [training.galaxyproject.org](https://training.galaxyproject.org)
]

???

![:scale 100%](images/training_material.png)

---
template: galaxy_title_slide

## Acknowledgements

---

# The team

.center[
![:scale 45%](images/galaxy_team1.png)
![:scale 45%](images/galaxy_team2.png)
]
.banner[
## [galaxyproject.org/galaxy-team](https://galaxyproject.org/galaxy-team)
]

---

# The community

![:scale 100%](images/galaxyproject_contributors.png)

---
class: center, middle

![:scale 30%](images/ELIXIR_BELGIUM_white_background.png)

![:scale 20%](images/excelerate.png)
![:scale 20%](images/FWO_Logo_Kleur.jpg)
![:scale 20%](images/ewi.png)
![:scale 20%](images/vib_tagline_pos_rgb.png)

### 5 ELIXIR Belgium vacancies open !

[www.vib.be/jobs](http://www.vib.be/jobs) Ghent - Plant Systems Biology

<img src="images/excelerate.png" height="8%" style="position:absolute;left:11%;bottom:2%;" />
<img src="images/europe.png" height="8%" style="position:absolute;left:1%;bottom:2%;" />

<p style="position:absolute;left:28%;right:2%;bottom:2%;font-size:50%;text-align:left">
ELIXIR-EXCELERATE is funded by the European Commission within the Research Infrastructures programme of H2020, grant agreement number 676559. The  sole  responsibility  for  the  content  of  this  presentation  lies  with  ELIXIR.  It  does  not  necessarily  reflect  the  opinion  of  the  European  Union and the European Commission is not responsible for any use than may be made of the information contained therein.
</p>

---
template: galaxy_slide

background-image: url("images/general_flyer_white.png")
background-position: top
background-repeat: no-repeat
background-size: contain

---
template: galaxy_slide
class: center, middle

![:scale 100%](images/galaxy_project_logo_white.png)
