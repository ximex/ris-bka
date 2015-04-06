# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


## [0.3.0] - 2015-04-05
### Added
- Changelog
- parseUtils for searchQuery checks

### Changed
- Parse/Marshaling searchQuery improvements
- searchTerms, title, index: SearchExpression -> PhraseSearchExpression
- Update Usage-Docu (SearchExpression -> PhraseSearchExpression)
- Update searchDocuments tests (SearchExpression -> PhraseSearchExpression)

### Fixed
- Publish only lib/, mappings/, LICENSE, package.json
- execute cbFail only if defined


## [0.2.0] - 2015-03-25
### Added
- Travis
- Tests
- Badges (Build Status, Code Climate, Test Coverage, Dependency Status)
- RIS_OGD_Dokumentation (.pdf, .md)
- Usage Documentation
- JSONIX Documentation

### Changed
- Marshaling searchQuery improvements
- parse getDocument result

### Fixed
- main starting file (lib/index.js)


## [0.1.0] - 2015-03-21
### Added
- editorconfig
- gitignore
- License
- Readme
- package.json
- Static request of getVersion, searchDocuments, getDocument
- Mapping Files
