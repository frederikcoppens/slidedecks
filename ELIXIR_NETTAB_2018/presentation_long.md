
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

## FAIR data, tools and workflows: a user perspective

### Frederik Coppens

#### NETTAB 2018 - Building a FAIR Bioinformatics environment

.italic[www.elixir-europe.org]

???

[https://frederikcoppens.github.io/slidedecks/](https://frederikcoppens.github.io/slidedecks/)

The goal to move towards a more Open Science environment has inspired funders and institutes to e.g. include data management plans and open access publication into grant requirements. To also ensure reproducibility in bioinformatics, the whole data analysis chain needs to taken into account, from input and reference data over tools and workflows to results. While this is a positive evolution it also confronts researchers with a number of challenges. These are largely in the realm of infrastructure, therefore we need to ensure that researchers have access to tools and services that can help them meet these challenges.
I will highlight a number of challenges users have to deal with and the solutions ELIXIR is working on to enable FAIR data, tools and workflows.





---

SLIDES TO BE ADAPTED

---


# Outline

### ELIXIR: European infrastructure for biological information

### ELIXIR Belgium

### Open Science, Open Data & Research Data Management

### ELIXIR Services: from an data management point of view

### The Open Science infrastructure puzzle

---

template: title_slide

# ELIXIR: European infrastructure for biological information

---

# European infrastructure for biological information

<span></span> | <span></span> | <span></span>
---- | ---- | ----
<img src="images/train.png" style="width:250px;" /> | .highlight[Domain specific Services] | ESFRIs
<img src="images/railroad.png" style="width:250px;" /> | Storage, Compute, Network | e-Infrastructures

???

People !

---
class: center, middle

# Data infrastructure for Europe’s life-science research

<img src="images/ELIXIR_overview.png" style="height:400px;" />

???

ELIXIR is an intergovernmental organisation that brings together life science resources from across Europe. These resources include databases, software tools, training materials, cloud storage and supercomputers.

The goal of ELIXIR is to coordinate these resources so that they form a single infrastructure. This infrastructure makes it easier for scientists to find and share data, exchange expertise, and agree on best practices. Ultimately, it will help them gain new insights into how living organisms work.

---
class: center, middle

# European-wide effort

<img src="images/ELIXIR_members.png" style="height:400px;" />

---

template: title_slide

# ELIXIR Belgium

---
class: center, middle

# Partners of ELIXIR Belgium

<img src="images/belgium.png" style="height:400px" />

---

class: center, middle

# Members of the lead institute

<img src="images/ElixirTeam_top.png" style="height:230px;" />

<span></span> | <span></span>
---- | ----
 Yves Van de Peer | Head of Node
 Frederik Coppens | deputy Head of Node & Technical Coordinator
 Kim De Ruyck | Coordinator ELIXIR Belgium
 Lieven Sterck | Technical Coordinator
 Alexander Botzki | Training Coordinator
 Paula Andrea Martinez | Trainer

---

class: center, middle

# Aim of ELIXIR Belgium

### .quote[ to ensure that Belgian researchers in life sciences can focus on their research question, rather than technical details of data, interoperability, compute resources, … by providing tailored solutions based on an interoperable infrastructure across Europe.]

---
template: title_slide

# Open Science, Open Data & Research Data Management

---
class: center, middle

# The theory

![:scale 100%](images/EC_how_it_works.jpg)

---
# Issues with the theory for researchers

* What should be in a Data Management Plan ?
* Gathering data ? What to gather ?
* What is metadata ? Never heard of...
* Which repository to choose ?
* How to deposit (large amounts of) data ?
* What is OpenAire ?

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---
template: title_slide

# ELIXIR Services

---
class: center, middle

# ELIXIR Services

<img src="images/ELIXIR_services.png" style="height:400px;" />

---

class: center, middle

# Data infrastructure for Europe’s life-science research

<img src="images/ELIXIR_overview.png" style="height:400px;" />

New Communities: Proteomics, Metabolomics, Galaxy

---

# FAIR Data Position Paper

1. .highlight[Open sharing of research data is a core principle] for publicly-funded research and ELIXIR encourages   all   funders   to   adopt   Open   Data   mandates.
2. .highlight[Data   Management   is   crucial]   part   of   good   scientific   practice   and   research   excellence.
3. Whenever possible, biological research data should be submitted to the recommended
community   .highlight[deposition   databases].
4. All data submitted to Open Data archives must be .highlight[annotated] in accordance with
.highlight[community-defined  standards].
5. .highlight[ELIXIR Nodes] are the national implementation of a harmonised FAIR Data Management
programme   for   the   life   sciences.
6. FAIR   data   management   requires   .highlight[professional   skills]   and   adequate   resources.
7. Good   research   data   management   requires   appropriate   .highlight[funding   for   data   infrastructures].

[https://www.elixir-europe.org/news/position-paper-fair-data-management](https://www.elixir-europe.org/news/position-paper-fair-data-management)

---

# Data Platform

### Deposition Databases for Biomolecular Data

<span></span> | <span></span>
---- | ----
ArrayExpress | Functional genomics data
BioModels	| Computational models of biological processes
EGA	| Genetic and phenotypic data from biomedical research projects
ENA | Nucleotide sequence information
IntAct	| Molecular interaction data
MetaboLights	| Experimental metabolomics data
PDBe	| Biological macromolecular structures
PRIDE	| Mass spectrometry-based proteomics data

https://www.elixir-europe.org/platforms/data/elixir-deposition-databases

---

# Data Platform

### ELIXIR Core Data Resources

#### Fundamental importance to the wider life-science community
#### Long-term preservation of biological information
#### Ensure sustainability

Examples:

* European Nucleotide Archive (ENA)
* Europe PubMed Central
* Human Protein Atlas

https://www.elixir-europe.org/platforms/data/core-data-resources

---


# Beacons

.highlight[Drive implementation of the Beacon technology within ELIXIR nodes]

<div style="display:block;float:right">
<img src="images/Beacon_countries.png"  style="height:300px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
</div>

ELIXIR Authentication and Authorisation Infrastructure

<span></span>  | <span></span>
---- | ----
<span style="color:green">Public</span> | Accessible to internet users
<span style="color:yellow">Registered</span>  | Accessible to bona fide researchers
<span style="color:red">Controlled</span>  | Authorized, signed agreement needed

<div style="display:block;position:absolute;bottom:10%;left:20%">
<img src="images/beacon.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
<img src="images/ega.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
<img src="images/ga4gh.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
</div>
---

# Interoperability Platform

.quote[ELIXIR encourages the life science community to adopt standardised file formats, metadata, vocabularies and identifiers.]

#### FAIR principles

#### Metadata: annotation & ontologies

#### Value proposition: return on investment for stakeholder

---

# BioSchemas.org

* .highlight[Schema.org] semantic markup of webpages
* collection of specifications that provide guidelines for markup within life sciences
* Generic service as part of the European Open Science Cloud

.center[<img src="images/BioSchemas.png" style="height:400px;" />]

---

# BioSchemas.org

.center[<img src="images/BioSchemas_applepie.png" style="height:400px;" />]

---

# Training eSupport System

* Disseminate, discover & package training resources, training materials and events
* Aggregating information from ELIXIR nodes and 3rd-party content providers

<img src="images/ELIXIR_TeSS_logo.png" style="height:100px;vertical-align:middle;horizontal-align:right;margin-left:20px" />
<img src="images/ELIXIR_TeSS.png" style="height:250px;vertical-align:middle;" />

[https://tess.elixir-uk.org](https://tess.elixir-uk.org)

---

# FAIRsharing.org

(formerly BioSharing.org)

.center[<img src="images/FAIRsharing.png" style="height:400px;" />]


???

Ontology lookup service
Identifiers.org

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---
# Tools Platform

.quote[improve the discovery, quality and sustainability of software resources]

#### Tools and services registry
#### Scientific benchmark and technical monitoring
#### Software deployment
#### Workflows and workbenches
#### Software best practices

[Jiménez et al. Four simple recommendations to encourage best practices in research software. F1000Research 2017, 6:876](http://dx.doi.org/10.12688/f1000research.11407.1)

#### Tools interoperability (e.g. Common Workflow Language)

---

# Tools & Services Registry

https://bio.tools

.center[<img src="images/biotools.png" style="height:400px;" />]

???

---

# Workflows

![:scale 90%](images/4_list_paired_collection_workflow.png)

workflow registry  ![](images/myexperiment.png)

---

# Galaxy

https://usegalaxy.org

![:scale 100%](images/Galaxy.png)

---

# Galaxy @ VSC

Server in Beta testing on VSC Cloud infrastructure : [https://www.usegalaxy.be](https://www.usegalaxy.be)

![:scale 100%](images/Galaxy_VSC.png)


---

# ELIXIR Galaxy Community

.center[<img src="images/Galaxy_overview.png" style="height:400px;" />]

Co-chairing with Björn Grüning (de.NBI, ELIXIR Germany) and Gildas Le Corguillé (IFB, ELIXIR France)

???

* A European network of Galaxy communities
* Visualisation in Galaxy
* Galaxy cloud infrastructure across Europe
* Data access & integration in Galaxy
* Bringing Tools and Data together
* Training
* FAIR and Galaxy

---

# Software deployment

https://biocontainers.pro/

.center[<img src="images/BioContainers.png" style="height:350px;" />]

.center[<img src="images/bioconda.png" style="height:70px;" />]

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---

# Data Management WG

#### Build a network of Data Stewards
#### Provide a checklist
#### Complementary to DMPonline

### Data Stewardship Wizard

Work in progress:  https://dmp.fairdata.solutions

.center[<img src="images/DataStewardshipWizard.png" style="height:250px;" />]

---

# DMPonline.be

![:scale 100%](images/DMPonline.png)

???

* Online wizard for Data Management Plans
* Internationally used open source software
* Based on templates
  - FWO
  - H2020
  - ...
* Managed by DMPbelgium consortium

---

# FAIRDOMHub

![:scale 100%](images/FAIRDOMHub.png)

???


* Online portal
* Template based: adaptable to domain specific needs
* Integration with analysis platforms possible
* Goal: central portal in Data Life Cycle
* Setting up collaboration within ELIXIR Nodes (H2020 INFRADEV-03)
* Work Package in FWO IRI call ELIXIR Belgium
* EWI project ‘Implementing EOSC: ESFRI driven Open Science’

---

# The Open Science infrastructure puzzle

* Data: input, intermediate & results
* Tools & workflows
* All associated metadata
* Infrastructure to
  - Store
  - Analyse
  - Publish / share
* Data Management Platform

---

# The Open Science infrastructure puzzle

![:scale 90%](images/infrastructure_vision.png)


---

.right[<img src="images/ELIXIR_logo_white_background.png" height="200px"/>]


#### Data infrastructure for Europe’s life-science research

#### Life-science gateway for the European Open Science Cloud

#### Broadly applicable solutions for common challenges

#### FAIR at the Core

* Data
* Metadata
* Tools & Services
* Analysis workflows
* ...

---

.right[<img src="images/ELIXIR_BELGIUM_white_background.png" height="200px"/>]

# Challenge

### Organize local data & metadata, compatible with daily research and publishing practices

---

# Upcoming Training ELIXIR Belgium

### Public proteomics data reprocessing and the Tabloid Proteome

#### 10 October 2018, from 9h30 to 17h00, Ghent

* Introduction to Public Proteomics resources and tools
* Practical: Reprocessing MS data from PRIDE
* Tabloid Proteome: a use case of public proteomics data re-use
* Practical: Investigating protein association using Tabloid Proteome database

#### https://www.elixir-belgium.org/training
#### https://tess.elixir-europe.org/ search 'proteomics'

---

class: center, middle

<img src="images/ELIXIR_BELGIUM_white_background.png"  style="height:350px;" />

<img src="images/vib_tagline_pos_rgb.png" style="height:80px" />
<img src="images/belspo.png" height="80px" />
<img src="images/ewi.png" height="80px" />
<img src="images/FWO_Logo_Kleur.jpg" height="80px" />

---

.center[<img src="images/galaxy_logo.png" style="height:100px;" />]

* workflow management system
* web-based user-interface
* inherent support for reproducible science
* facilitates sharing of data and results
* removes the need for users to compile and install tools

### Galaxy is available as a world-wide free-to-use online portal, and can be freely downloaded for a local installation.

---

.center[<img src="images/galaxy_logo.png" style="height:100px;" />]

.center[<img src="images/UseGalaxy.png" style="height:400px;" /> https://usegalaxy.org]

---

# Workflows

.center[<img src="images/4_list_paired_collection_workflow.png" style="height:400px;" />]

---
template: title_slide

# ELIXIR Galaxy Working Group to Community

## Recommendations document

by Manuel Corpas, Frederik Coppens & the ELIXIR Galaxy community

---

# The process

<img src="images/ELIXIR_Galaxy_recommendations.001.png" alt="ELIXR Galaxy recommendations process" height="500" class='plain'>

---

# Conclusions Survey

* Broad usage of Galaxy in the ELIXIR community
* Many small local instances
* Few resources for maintenance
* Main goal: Enable biologists to perform data intensive (NGS) analyses

---

# Goals

* Building a European / ELIXIR Galaxy community
* Integrate ELIXIR services into Galaxy
* Training for users, developers and administrators
* Development of the Galaxy Platform

---

# Activities on Training

* January 2017 : European Galaxy Developers, Strassbourg, France
* May 2017 : ELIXIR/GOBLET/GTN hackathon for Galaxy training material re-use, Cambridge, UK
* January 2018 : European Administrator Workshop, Oslo, Norway

[https://www.elixir-europe.org/about/groups/galaxy-wg](https://www.elixir-europe.org/about/groups/galaxy-wg)

---

# Working Group to Community

### September 2017

* From a temporary WG to an ELIXIR Community
* Part of the Tools platform
* Co-chairing with
  * Björn Grüning (Freiburg, de.NBI)
  * Gildas Le Corguillé (Roscoff, ELIXIR-FR)

---

template: title_slide

# ELIXIR Galaxy Community

---

# ELIXIR Galaxy Community

.center[<img src="images/Galaxy_overview.png" style="height:400px;" />]

---

# ELIXIR Galaxy Community

* Bringing Tools and Data together
* FAIR data, tools, workflows & Galaxy
* Training
* Data access & integration in Galaxy
* Galaxy cloud infrastructure across Europe
* A European network of Galaxy communities

---

# Links to other communities

### NGS

### Metabolomics [<img src="images/PhenoMeNal_logo.png" style="height:40px;" />](http://phenomenal-h2020.eu) [<img src="images/logo-ifb-mono-metabohub_2.1_SD_150px.png" style="height:40px;" />](http://workflow4metabolomics.org)

### Proteomics [<img src="images/GalaxyP_logo.png" style="height:50px;" />](http://galaxyp.org)

### Metagenomics

### Microbial

### Plant

### Genome annotation

---

# Towards FAIR

### Tools

### Workflows

### Data

### Training materials

### ...

---
template: galaxy_slide

.center[<img src="images/galaxy-eu.inv.1024.png"  style="height:200px;padding:10px;align:middle;margin-top:200px;" />]

---

# Tools packaging & dependencies

.center[<img src="images/Conda_overview.png" style="width:700px;" />]

???

* Programming language agnostic
* OS independent
* No root privileges needed
* Management of multiple version
* HPC and Cloud compatible
* Easy to maintain

---

# Tools & Services Registry


.center[<img src="images/biotools.png" style="height:400px;" /> https://bio.tools
]

.center[[ReGaTE: Registration of Galaxy Tools in ELIXIR](https://www.ncbi.nlm.nih.gov/pubmed/28402416)]

---

# Containers

.center[<img src="images/Conda_containers.png" style="width:700px;" />]

---

# Software deployment

.center[<img src="images/BioContainers.png" style="height:350px;" /> https://biocontainers.pro/ ]

---

# Future focus areas

## Workflows

* Agnostic repository improvements e.g. myExperiment
* Facilitate sharing between Galaxy instances

## Data

* Facilitate access to data in public repositories
* Container based sensitive data setup

---

template: title_slide

# ELIXIR Galaxy Infrastructure

---

# Galaxy Training Infrastructure

* Interactive learning platform
* Support for current research problems
* Effective training for individual users & instructors
* Community driven (content creation and maintenance)
* Convenient, hassle-free tutorial creation
* Enables transparent peer-review and curation
* FAIR: Findable, Accessible, Interoperable, Reusable
* Open

---

# Galaxy Training Infrastructure

.center[<img src="images/training_material.png" style="height:450px;vertical-align:middle" />
[Bérénice Batut](https://github.com/bebatut/talks/tree/master/18/03_16_galaxy_user_conf)]

---

# Galaxy Training Infrastructure

.center[<img src="images/training_galaxyproject.png" style="height:450px;vertical-align:middle" /> https://training.galaxyproject.org]

---

# Training eSupport System

* Disseminate, discover & package training resources, training materials and events
* Aggregating information from ELIXIR nodes and 3rd-party content providers

<img src="images/ELIXIR_TeSS_logo.png" style="height:100px;vertical-align:middle;horizontal-align:right;margin-left:20px" />
<img src="images/ELIXIR_TeSS.png" style="height:250px;vertical-align:middle;" />

.center[[https://tess.elixir-uk.org](https://tess.elixir-uk.org)]

---
template: title_slide

# Towards an integrated data analysis infrastructure

---
template: galaxy_slide

.center[<img src="images/useGalaxy.eu.inv.1024.png"  style="width:700px;padding:10px;align:middle;margin-top:200px;" />]

---

.center[<img src="images/useGalaxy.eu.1024.png"  style="height:70px;padding:10px;" />]

* Launched March 15, 2018
* Thousands of documented and maintained tools
* Free registration
* 250 GB per user
* Training capacities on demand and online (Training Infrastructure as a Service)

.center[<img src="images/freiburg-galaxy.1024.png" style="height:160px;padding:10px;vertical-align:middle" /> <img src="images/denbi.png" style="height:80px;padding:10px;vertical-align:bottom" />]

---

# Towards a federation of Galaxies

* Link instances across the globe
* Minimal requirements: enable all training materials
* Workload located based on your affiliation
* Facilitates sharing Workflows
* Rapid access to new developments
* Easier maintenance of servers
* ...

---

# ELIXIR Galaxy Community

.center[<img src="images/overview_simplified.png" style="height:400px;" />]

???

https://conda.io/docs/

---

class: center, middle

# Thank you

<img src="images/ELIXIR_logo_white_background.png"  style="height:200px;padding:10px;vertical-align:middle" />
<img src="images/psbpos.jpg" style="height:150px;padding:10px;vertical-align:middle" />

<img src="images/vib_tagline_pos_rgb.png" style="height:60px;padding:10px" />
<img src="images/belspo.png" style="height:60px;padding:10px" />
<img src="images/ewi.png" style="height:60px;padding:10px" />
<img src="images/FWO_Logo_Kleur.jpg" style="height:60px;padding:10px" />
<img src="images/excelerate.png" style="height:60px;padding:10px" />

---

template: title_slide

## The ELIXIR Galaxy Community

### Björn Grüning, Gildas Le Corguillé, Frederik Coppens

#### 12th CeBiTec Symposium - Big Data in Medicine and Biotechnology

.italic[www.elixir-europe.org]
