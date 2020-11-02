name: title_slide
layout: true
class: right, middle

background-image: url("images/ELIXIR_background.png")
background-position: top
background-repeat: no-repeat
background-size: contain

<div style="height:250px"></div>

<img src="images/ELIXIR_logo_white_background.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
layout: true
name: galaxy_slide

background-color: #2c3143

---

layout: true

<img src="images/ELIXIR_logo_white_background.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
template: title_slide

## Enabling & stimulating submission to the COVID data portal & re-use of the data

### Frederik Coppens

#### November 2, 2020

---
class: center

![:scale 60%](images/eosclogo.png)

### Virtual environment

### Seamless integration of services

#### data storage, data management, data analysis, re-use of data

### Across scientific disciplines and borders

---
template: title_slide

# Submission of raw data to ENA

---

# Viral data sharing practices

### GISAID appears to be standard

- consensus sequence only
- non-open data licence
- provenance issues

### Familiar & low volume

### Submission to ENA: learning curve

- large volumes of data
- controlled metadata

---

# Problem statement

.center[
### (clinical) labs do not have the time during the pandemic to develop new data sharing & submission protocols
]

# Solutions developed

### Targeted tools & documentation for viral data

### Brokering for Belgian researchers

---

# Python Command Line interface

### Makes submission easier for bioinformaticians

### Generates the required XML files out of easier-to-use tsv files

### Takes care of the ftp uploading

### Validates the metadata before submission


---

# Python Command Line interface

### Building on existing tools & infrastructure

* [Basic ENA upload tool in Galaxy](https://github.com/usegalaxy-eu/ena-upload-cli)
* [ENA API & documentation](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html)

### Available for all (contributions welcome)

.center[
[![:scale 10%](images/pip.svg) Python package](https://pypi.org/project/ena-upload-cli/)
[![:scale 20%](images/bioconda.png) package](https://anaconda.org/bioconda/ena-upload-cli)
[![:scale 10%](images/GitHub_Logo.png) source code](https://github.com/usegalaxy-eu/ena-upload-cli)
]

---

# Galaxy tool

.center[
[![:scale 70%](images/ENA_upload.png)](images/ENA_upload.png)
]

* User generated metadata
* In-tool generated metadata

.center[
Available in
[![:scale 30%](images/toolShed.jpg)](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8)
]

---

# Container

### Local Galaxy in a container

### Raw data cleanup workflow: remove human traces

### Submission to ENA

.center[
docker run -p "8080:80" -v <absolute path>/.secret:/.secret -e WEBIN_ID="Webin-*****" -e WEBIN_SECRET="/.secret" --privileged quay.io/galaxy/ena-upload
]

---

# Interacting with ENA

### Submission requires ENA Webin account

* Parameter when starting the container
* Extra step for researchers...

### Brokering as a service (in Belgium)

* Submitted data for Insitute of Tropical Medicine (Antwerp)
* Submission for Erasmus Hospital (ULB) in progress
* In contact with University of Liege

### Currently limitations for use in a public Galaxy

* Private instance
* Local Galaxy (e.g. container)

---

# Data from BE in data portal !

![:scale 100%](images/data_portal_ITG.png)

---

# Documentation (in progress)

![:scale 100%](images/elixir-belgium-rdm.png)

.center[[https://rdm.elixir-belgium.org/covid-19/sarscov2_submission](https://rdm.elixir-belgium.org/covid-19/sarscov2_submission)]

---

# The ![:scale 30%](images/EOSClife.png) ecosystem

![:scale 80%](images/EOSC-Life_T2.1.png)

---

# Galaxy workflows

.center[
![:scale 35%](images/covid_galaxy.png)

![:scale 20%](images/usegalaxy.be.png)
![:scale 20%](images/usegalaxy.eu.1024.png)
]

---

# WorkflowHub.eu

![:scale 100%](images/workflowhub.png)

Lead by Carole Goble

---

# GA4GH Tool Repository Service in Galaxy

![:scale 100%](images/TRS_1.png)

By Björn Grüning

---

# GA4GH Tool Repository Service in Galaxy

![:scale 100%](images/TRS_2.png)

![:scale 100%](images/TRS_3.png)

By Björn Grüning

---

# Webinars

![:scale 100%](images/covid_webinars.png)

.center[
[https://elixir-europe.org/events/webinar-galaxy-elixir-covid19](https://elixir-europe.org/events/webinar-galaxy-elixir-covid19)

New series being planned (early 2021)
]
---

# Conclusion

### Tools for submission developed

* Command line interface
* Galaxy tool
* Container deployment
* Dissemination in progress

### Integrated in ecosystem

.center[
![:scale 30%](images/EOSClife.png)
![:scale 30%](images/eosclogo.png)
]
---

# Future work

### Dedicated Galaxy instance for brokering: usegalaxy.be/covid-19

### Integrate user credentials for ENA into Galaxy

### Integrate submission to GISAID

### Integrate submission of other data types

---

## Acknowledgements

<span></span> | <span></span>
---- | ----
<img src="images/ELIXIR_BELGIUM_white_background.png" style="width:160px;" /> <span style="width:30px;"> </span> <img src="images/vib_tagline_pos_rgb.png" style="width:160px;" />  | <ul><li>Miguel Roncoroni</li> <li>Kim De Ruyck</li> <li>Ignacio Eguinoa</li> <li>Bert Droesbeke</li>  <li>Flora d'Anna</li>  <li>Vahid Kiani</li>  </ul>
<img src="images/useGalaxy.eu.1024.png" style="width:200px;" />   | <ul><li>Björn Grüning</li> <li>Dilmurat Yusuf</li></ul>
<img src="images/galaxy_project_logo.png" style="width:150px;" />   | <ul><li>James Taylor</li> <li>Anton Nekrutenko</li></ul>
<img src="images/VSC.png" style="width:200px;" />   | <ul><li>Álvaro Simon Garcia</li> <li>Stijn De Weirdt</li></ul>
<img src="images/workflowhub.svg" style="width:200px;" />   | <ul><li>Carole Goble</li> <li>WorkflowHub Club</li></ul>
<img src="images/EMBL-EBI.png" style="width:180px;" />   | <ul><li>Guy Cochrane</li> <li>Nadim Rahman</li></ul>
  |
---
class: center, middle

![:scale 45%](images/FWO_Logo_Kleur.jpg)
![:scale 45%](images/ewi.png)
![:scale 45%](images/EOSClife.png)
![:scale 40%](images/ELIXIR_logo_white_background.png)
